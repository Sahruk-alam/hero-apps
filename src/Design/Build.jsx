import React from 'react';
import hero from '../assets/hero.png' 
import group from '../../src/assets/Group.png'
import vector from '../../src/assets/fi_16076057.png'
const Build = () => {
    return (
        <div className='bg-gray-200 flex justify-center flex-col'>
            <h2 className='text-center text-4xl font-bold'>We Build <br /> <span 
            className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
            text-transparent bg-clip-text'>Productive</span> Apps</h2>
            <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life
                 simpler, smarter, and more exciting.Our goal <br /> is to turn your ideas into
                  digital experiences that truly make an impact.</p>

                  <div className="flex justify-center gap-4 mt-4">
                    <button className="btn "> <img className='h-6 w-6' src={vector} alt="" />          
                      Google Play
                    </button>
                    <button className="btn "> <img className='h-6 w-6' src={group} alt="" />                   
                      App Store
                    </button>
                  </div>
                  <div className='flex justify-center mt-7'>
                    <img src={hero} alt="" />
                  </div>
                  <div className='p-6 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
                    <h2 className='text-white text-5xl font-semibold'>Trusted by Millions, Built for You</h2>
                  <div className='flex gap-19 my-7 justify-center'>
                    <div className='text-white text-center'>
                        <p>Total Downloads</p>
                        <h2 className='text-6xl font-semibold my-3'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white text-center'>
                        <p>Total Reviews</p>
                        <h2 className='text-6xl font-semibold my-3'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-white text-center'>
                        <p>Active Apps</p>
                        <h2 className='text-6xl font-semibold my-3'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                  </div>
                  
                  </div>
        </div>
    );
};

export default Build;