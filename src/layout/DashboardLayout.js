import React from 'react';
import { Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';
import { FiUserPlus, FiUserMinus, FiUsers } from 'react-icons/fi';
import { TbClipboardList } from 'react-icons/tb';
import Sidebar from '../components/Sidebar/Sidebar';
import useAuth from '../hooks/useAuth';

const DashboardLayout = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 lg:bg-inherit bg-base-100 text-base-content">
                        <li><Sidebar to="/dashboard"><TbClipboardList className='text-xl'></TbClipboardList>My Appointment</Sidebar></li>
                        {
                            isAdmin && <>
                                <li><Sidebar to="/dashboard/users"><FiUsers></FiUsers>All Users</Sidebar></li>
                                <li><Sidebar to="/dashboard/add-doctor"><FiUserPlus></FiUserPlus>Add Doctor</Sidebar></li>
                                <li><Sidebar to="/dashboard/manage-doctors"><FiUserMinus></FiUserMinus>Manage Doctors</Sidebar></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;