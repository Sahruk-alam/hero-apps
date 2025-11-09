import React from 'react';
import { Link, NavLink } from 'react-router';

const NoApps = () => {
return (
    <div className='mt-6 h-screen'>
        <title>No apps found</title>
        <h2 className='text-3xl md:text-6xl font-bold text-gray-600'>No Apps Found</h2>
        <NavLink className='btn btn-primary my-15' to={-1}>Show All Apps</NavLink>
    </div>
);
};

export default NoApps;