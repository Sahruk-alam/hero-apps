import React from 'react';
import NavBar from '../component/navbar/Navbar';
import Footer from '../component/footer/footer';
import NotFound from './NotFound';

const ErrorPage = () => {
    return (
        <div className=''>
            <NavBar/>
            <div className='flex mt-12 justify-center'>
                <NotFound/>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;