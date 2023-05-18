import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content justify-center">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={login} alt="" />
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
                            <button className="btn btn-circle text-3xl"><FaFacebook /></button>
                            <button className="btn btn-circle text-2xl"><FaLinkedin /></button>
                            <button className="btn btn-circle text-3xl"><FaGoogle /></button>
                        </div>
                        <div className='text-center mb-7'>
                            <p>New to Car Doctor? <Link to="/register"><a className="label-text-alt link link-hover text-[#FF3811] text-xl">Register</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;