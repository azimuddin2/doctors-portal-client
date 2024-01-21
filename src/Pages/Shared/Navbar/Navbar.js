import React from 'react';
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const navOptions = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
        <li>
            {
                user?.uid && <CustomLink to='/dashboard'>Dashboard</CustomLink>
            }
        </li>
        <li>
            {
                user?.uid ?
                    <button onClick={handleLogout}>Logout</button>
                    :
                    <CustomLink to='/login'>Login</CustomLink>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100 lg:container lg:mx-auto">
            <div className="navbar-start w-4/5 lg:w-1/2">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className='flex justify-items-center items-center'>
                    <img className='w-7 md:w-9' src={logo} alt="" />
                    <span className=' font-medium text-base md:text-lg ml-1'>Doctors Portal</span>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu-horizontal p-0 font-medium">
                    {navOptions}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;