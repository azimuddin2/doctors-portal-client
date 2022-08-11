import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='text-3xl text-accent'>Welcome to your Dashboard</h1>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/review'>My Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;