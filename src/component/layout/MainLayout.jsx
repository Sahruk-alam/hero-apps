import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import NavBar from '../navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <div className='flex flex-col min-h-scree'>
                <NavBar/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;