import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import CustomLink from './CustomLink';
import { IoHomeOutline } from "react-icons/io5";
import { LuCalendarClock, LuLayoutDashboard } from "react-icons/lu";
import { TbMessageStar } from "react-icons/tb";
import { BsInfoSquare } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('accessToken');
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const navOptions = <>
        <li>
            <CustomLink to='/'>
                <IoHomeOutline className='text-lg lg:hidden' />Home
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/appointment'>
                <LuCalendarClock className='text-lg lg:hidden' />Appointment
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/about'>
                <BsInfoSquare className='text-lg lg:hidden' />About
            </CustomLink>
        </li>
        <li>
            <CustomLink to='/reviews'>
                <TbMessageStar className='text-lg lg:hidden' />Reviews
            </CustomLink>
        </li>
        {
            user?.uid && <li>
                <CustomLink to='/dashboard'>
                    <LuLayoutDashboard className='text-lg lg:hidden' />Dashboard
                </CustomLink>
            </li>
        }
        <li>
            {
                user?.uid ?
                    <button onClick={handleLogout} className='lg:ml-4'>
                        <FiLogIn className='text-lg lg:hidden' />Logout
                    </button>
                    :
                    <CustomLink to='/login'>
                        <FiLogIn className='text-lg lg:hidden' />Login
                    </CustomLink>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 px-5 lg:px-8">
            <div className="navbar-start">
                <Link to='/' className='flex justify-items-center items-center'>
                    {/* <img className='w-7 md:w-9' src={logo} alt="logo" /> */}
                    <p className='font-bold lg:text-xl ml-1 text-accent font-family'>Doctors Portal</p>
                </Link>
            </div>
            <div className='navbar-end hidden lg:flex items-center'>
                <ul className="menu-horizontal p-0 font-medium">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="responsive-navbar menu menu-compact dropdown-content mt-3 p-4 shadow bg-base-100 w-64 right-6 font-medium"
                    >
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;