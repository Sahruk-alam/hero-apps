import React from 'react';
import loadingImage from '../../assets/logo.png'
const AnimationLoading = () => {
    return (
        <div className="flex fixed inset-0 z-[9999] items-center justify-center bg-gray-200 h-screen"> <span 
        className='text-7xl font-bold text-gray-500 mr-10'>L</span>
            <div className="animate-spin rounded-full w-23 ">
                <img src={loadingImage} alt="Loading..." />
            </div> <span className='text-7xl ml-8 font-bold text-gray-600'>O A D I N G</span>
        </div>
    );
};

export default AnimationLoading;