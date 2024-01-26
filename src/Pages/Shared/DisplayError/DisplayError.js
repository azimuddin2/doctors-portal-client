import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../../assets/images/404-error.gif';
import useTitle from '../../../hooks/useTitle';
import { FaHome } from 'react-icons/fa';

const DisplayError = () => {
    useTitle('Error');

    return (
        <div className='text-center my-20'>
            <img src={error404} alt="" className='mx-auto' />
            <Link to='/'>
                <button style={{ backgroundColor: '#FF725E' }} className='btn border-none text-white'>
                    <FaHome className='text-xl mr-1'></FaHome>
                    <span className='mt-1'>Back to Home</span>
                </button>
            </Link>
        </div>
    );
};

export default DisplayError;