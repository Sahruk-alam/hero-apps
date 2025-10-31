import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import NavBar from '../navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <div className='flex flex-col min-h-screen'>
               <Outlet/> 
            </div>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;