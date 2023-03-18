import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);

export default router;