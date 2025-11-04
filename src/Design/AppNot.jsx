import React from 'react';
import appError from '../assets/App-Error.png'
import { Link } from 'react-router';
const AppNot = () => {
    return (

            <div className='mt-12'>
            <img src={appError} className='ml-20' alt="404 Not Found" />
            <h2 className='font-semibold text-center text-5xl mt-8 text-[#001931]'>
                OPPS!! APP NOT FOUND</h2>
         <p className='text-gray-600  my-5'>The App you are requesting is not found on our system.  please try another apps</p>
        <div className='flex justify-center'>
            <Link to="/" className='btn mb-10 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>Go Back</Link>
        </div>
        </div>
       
    );
};

export default AppNot;