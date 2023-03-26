import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { toast } from 'react-toastify';
import errorImg from '../../assets/images/error.gif';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
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