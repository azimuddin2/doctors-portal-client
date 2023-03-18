import React from 'react';
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../assets/images/logo.png';

const Navbar = () => {

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div className="navbar bg-base-100 lg:container lg:mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/appointment'>Appointment</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        {/* <li>
                            {
                                user && <Link to='/dashboard'>Dashboard</Link>
                            }
                        </li>
                        <li>
                            {
                                user ?
                                    <button onClick={logout}>Logout</button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </li> */}
                    </ul>
                </div>
                <Link to='/' className='flex justify-items-center items-center'>
                    <img className='w-8' src={logo} alt="" />
                    <span>Doctors Portal</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal p-0 ">
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/appointment'>Appointment</CustomLink></li>
                    <li><CustomLink to='/about'>About</CustomLink></li>
                    <li><CustomLink to='/reviews'>Reviews</CustomLink></li>
                    <li><CustomLink to='/contact'>Contact Us</CustomLink></li>
                    <li>
                        {/* {
                            user && <CustomLink to='/dashboard'>Dashboard</CustomLink>
                        }
                    </li>
                    <li>
                        {
                            user ?
                                <button onClick={logout}>Logout</button>
                                :
                                <CustomLink to='/login'>Login</CustomLink>
                        } */}
                    </li>
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