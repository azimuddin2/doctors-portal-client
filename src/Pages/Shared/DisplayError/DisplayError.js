import React from 'react';
import { Link, isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { toast } from 'react-toastify';
import errorImg from '../../../assets/images/error.gif';
import error404 from '../../../assets/images/404-error.gif';
import useTitle from '../../../hooks/useTitle';
import { FaHome } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const DisplayError = () => {
    useTitle('Error');
    const error = useRouteError();
    const { logOut } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                toast.error(error.message);
            })
    };

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <div className='text-center my-20'>
                <img src={error404} alt="" className='mx-auto' />
                <Link to='/'>
                    <button style={{backgroundColor: '#FF725E'}} className='btn border-none text-white'>
                        <FaHome className='text-xl mr-1'></FaHome>
                        <span className='mt-1'>Back to Home</span>
                    </button>
                </Link>
            </div>;
        }
    }

    return (
        <div className='text-center'>
            <img src={errorImg} alt="Error" className='mx-auto' />
            <p className='text-red-400'>Something went wrong!!</p>
            <p className='text-red-500 text-2xl'>{error.statusText || error.message}</p>
            <h2 className='text-2xl'>Please <button className='btn btn-outline btn-sm' onClick={handleLogout}>Logout</button> and log back in</h2>
        </div>
    );
};

export default DisplayError;