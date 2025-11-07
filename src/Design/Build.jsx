import React from 'react';
import hero from '../assets/hero.png' 
import group from '../../src/assets/Group.png'
import vector from '../../src/assets/fi_16076057.png'
import { FaDownload } from "react-icons/fa6";
import { IoDownload } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Build = () => {
    return (
        <div className='flex justify-center mt-9 flex-col'>
            <h2 className='text-center text-4xl font-bold'>We Build <br /> <span 
            className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
            text-transparent bg-clip-text'>Productive</span> Apps</h2>
            <p className='text-center'>At HERO.IO, we craft innovative apps designed to make everyday life
                 simpler, smarter, and more exciting.Our goal <br /> is to turn your ideas into
                  digital experiences that truly make an impact.</p>

                  <div className="flex justify-center gap-4 mt-4">
                    <a href='https://play.google.com/store/apps' target='_blank' className="btn "> <img className='h-6 w-6' src={vector} alt="" />          
                      Google Play
                    </a>
                    <a href='https://www.apple.com/lae/app-store/' target='_blank' className="btn "> <img className='h-6 w-6' src={group} alt="" />                   
                      App Store
                    </a>
                  </div>
                  <div className='flex justify-center mt-7'>
                    <img src={hero} alt="" />
                  </div>
                  <div className='p-6 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
        <h2 className='text-white md:text-5xl text-2xl font-semibold'>Trusted by Millions, Built for You</h2>
       <div className='flex flex-col md:flex-row gap-10 my-7 items-center justify-center'>

        <div className='text-white gap-5 flex items-center text-center'>
          
        <div>
          <p>Total Downloads</p>
        <h2 className='md:text-5xl text-4xl font-semibold my-3'>29.6M</h2>
        <p>21% more than last month</p>
        </div>
        <div className='text-5xl'><IoDownload/></div>
        </div>
                    <div className='text-white gap-5 flex items-center text-center'>
                        <div>
                          <p>Total Reviews</p>
                        <h2 className='md:text-5xl text-4xl font-semibold my-3'>906K</h2>
                        <p>46% more than last month</p>
                        </div>
                        <div className='text-5xl'><FaStar /></div>
                    </div>
                    <div className='text-white flex gap-5 items-center text-center'>
                        <div>
                          <p>Active Apps</p>
                        <h2 className='md:text-5xl text-4xl font-semibold my-3'>132+</h2>
                        <p>31 more will Launch</p>
                        </div>
                        <div className='text-4xl'><FaGooglePlay /></div>
                    </div>
                  </div>
                  
                  </div>
        </div>
    );
};

export default Build;