import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className='min-h-screen'>
            <title>Error 404</title>
            <img src={error} alt="404 Not Found" />
            <h2 className='font-semibold text-center text-5xl mt-8 text-[#001931]'>Oops, page not found!</h2>
         <p className='text-gray-600 text-center my-5'>The page you are looking for is not available.</p>
        <div className='flex justify-center'>
            <Link to="/" className='btn mb-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Go Back</Link>
        </div>
        </div>
    );
};

export default NotFound;