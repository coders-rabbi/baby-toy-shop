import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPhoto from "../../../assets/login/login.svg"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHeader } from "../../../../useTitle";

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, googleSingIn, user, gitHubSingIn } = useContext(AuthContext);


    useHeader("Login - Baby Toy Shop")

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loggedUser = { email: email, password: password }
        console.log(loggedUser);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                toast("Login Successful!");
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row justify-center">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginPhoto} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className='text-center text-4xl font-bold mt-16'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link><a className="label-text-alt link link-hover">Forgot password?</a></Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811]"><input type="submit" value="Login" /></button>
                                </div>
                            </div>
                        </form>
                        <div className='mx-auto flex gap-6 mb-4'>
                            <button onClick={gitHubSingIn} className="btn btn-circle text-3xl"><FaGithub /></button>
                            <button onClick={googleSingIn} className="btn btn-circle text-3xl"><FaGoogle /></button>
                        </div>
                        <div className='text-center mb-7'>
                            <p>New to Car Doctor? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;