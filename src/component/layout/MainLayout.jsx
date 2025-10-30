import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import NavBar from '../navbar/Navbar';


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            main
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;