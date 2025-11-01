import React from 'react';
import { GrInstall } from "react-icons/gr";
const Installation = () => {
    return (
        <div className='bg-gray-200'>
            <h2 className='text-5xl text-center mt-11 flex items-center justify-center gap-3 font-bold'>Your Installed Apps<GrInstall /></h2>
            <p className='text-center my-3 mb-9 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            
            <div className='flex justify-around px-12 '>
                <h2 className='font-semibold text-2xl'>App Found</h2>
                <button className='btn'>Sort by size</button>
                
            </div>
            <hr className='my-15'/>
        </div>
    );
};

export default Installation;         