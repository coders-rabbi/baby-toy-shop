import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="all-toys">All Toys</Link></li>
        <li><Link to="add-toy">Add Toy</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <div>
            {
                user ?
                    <div className='md:flex'>
                        <li><Link to="my-toy">My Toys</Link></li>
                        <button onClick={handleLogOut} className="btn btn-error">LogOut</button>


                    </div>
                    :
                    <div className='md:flex'>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>
            }
        </div>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <img className='w-36' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <img className='bg-transparent border-2 border-logo-color h-20 w-20 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />
                    </>
                    : <></>
                }
            </div>
        </div>
    );
};

export default Header;