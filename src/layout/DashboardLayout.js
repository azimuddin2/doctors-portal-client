import React from 'react';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { HiDocumentChartBar } from "react-icons/hi2";
import { FaUserDoctor, FaUsersGear } from "react-icons/fa6";
import { IoSettings } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import { MdRateReview } from "react-icons/md";

const DashboardLayout = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='flex items-center ml-5 lg:ml-0'>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost text-accent lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Navbar></Navbar>
            </div>
            <div className="drawer block lg:grid lg:drawer-open">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full w-64 lg:bg-inherit bg-base-100 text-base-content">
                        <li>
                            <ActiveLink to="/dashboard">
                                <HiDocumentChartBar className='text-xl' />My Appointment
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/dashboard/add-review">
                                <MdRateReview className='text-xl' />Add Review
                            </ActiveLink>
                        </li>
                        {
                            isAdmin && <>
                                <li>
                                    <ActiveLink to="/dashboard/users">
                                        <FaUsersGear className='text-xl' />All Users
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/add-doctor">
                                        <FaUserDoctor className='text-xl' />Add Doctor
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/manage-doctors">
                                        <IoSettings className='text-xl' />Manage Doctors
                                    </ActiveLink>
                                </li>
                            </>
                        }
                        <li className='mt-auto'>
                            <ActiveLink to='/'>
                                <FaHome className='text-xl' />Home
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;