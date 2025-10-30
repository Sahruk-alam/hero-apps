import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import contribute from '../../assets/contribute.png'
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
const NavBar = () => {
    return (
       <div>
        <div className="navbar bg-base-100 shadow-sm p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/apps'>Apps</NavLink>
        </li>
        <li><NavLink to='/installation'>Installation</NavLink></li>
      </ul>
    </div>
   <Link to='/' className='flex'> <img className='h-8 w-8' src={logo} alt="" />
    <a className="text-lg">Hero.io</a></Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'><IoHomeOutline />Home</NavLink></li>
      <li>
           <NavLink to='/apps'><FaAppStore />Apps</NavLink>
      </li>
      <li><NavLink to='/installation'><MdInstallDesktop />Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a
      href="https://github.com/Sahruk-alam" 
      target="_blank" 
      rel="noopener noreferrer" 
    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
     btn btn-primary"><img src={contribute} alt="" />Contribute</a>
  </div>
</div>
    
</div>
    
       
    );
};

export default NavBar;