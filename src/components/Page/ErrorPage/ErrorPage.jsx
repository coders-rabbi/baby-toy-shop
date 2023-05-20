import React from 'react';
import Lottie from "lottie-react";
import error from "../../../assets/40806-error-404.json"
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='w-6/12 mx-auto mt-20'>
            <Lottie animationData={error} loop={true} />;
            <div className='flex justify-center'>
                <Link to="/"><button className="btn btn-ghost">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;