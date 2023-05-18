import { Link } from "react-router-dom";
import loginPhoto from "../../../assets/login/login.svg"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            alert('Please enter more than 6 characters password');
        }

        const userData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then((res) => {
                    // Profile updated!
                    // ...
                })
                .catch((e) => {
                    // An error occurred
                    // ...
                });
        };

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                userData(loggedUser, name, photo);
                console.log(loggedUser);
                form.reset();
                toast("Account Created Successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row justify-center">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginPhoto} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <h1 className='text-center text-4xl font-bold mt-10'>Login</h1>
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link><a className="label-text-alt link link-hover">Forgot password?</a></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811]"><input type="submit" value="Register" /></button>
                            </div>
                        </div>
                    </form>
                    <div className='mx-auto flex gap-6 mb-4'>
                        <button className="btn btn-circle text-3xl"><FaGithub /></button>
                        <button className="btn btn-circle text-3xl"><FaGoogle /></button>
                    </div>
                    <div className='text-center mb-7'>
                        <p>Already Have an Account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;







