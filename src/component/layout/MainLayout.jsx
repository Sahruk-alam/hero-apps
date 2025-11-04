import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import NavBar from '../navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    
    return (
        <div>
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