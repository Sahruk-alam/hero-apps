import React from 'react';

import { Outlet, useNavigation } from 'react-router';
import Footer from '../footer/footer';
import NavBar from '../navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import AnimationLoading from '../Hook/AnimationLoading';

const MainLayout = () => {
  const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    if (isLoading) {
        return (
            <div className=" fixed full-screen-loader">
                <AnimationLoading />
            </div>
        );
    }

    return (
        <div className='relative'>
            <NavBar/>
        
          
            <div className='flex flex-col min-h-screen'>
               <Outlet/> 
            </div>
            
            <Footer/>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default MainLayout;