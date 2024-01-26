import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Reviews from "../Pages/Reviews/Reviews";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import MyAppointment from "../Pages/Dashboard/UserPages/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AdminPages/AllUsers/AllUsers";
import AddDoctor from "../Pages/Dashboard/AdminPages/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/AdminPages/ManageDoctors/ManageDoctors";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'appointment',
                element: <PrivateRoute>
                    <Appointment></Appointment>
                </PrivateRoute>
            },
            {
                path: 'reviews',
                element: <Reviews></Reviews>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: 'users',
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: 'add-doctor',
                element: <AdminRoute>
                    <AddDoctor></AddDoctor>
                </AdminRoute>
            },
            {
                path: 'manage-doctors',
                element: <AdminRoute>
                    <ManageDoctors></ManageDoctors>
                </AdminRoute>
            }
        ]
    },
]);

export default router;