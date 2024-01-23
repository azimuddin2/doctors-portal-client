import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import bgAppointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-reveal';
import Button from '../../Shared/Button/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bgAppointment})`,
            width: '100%',
            backgroundPosition: '100%',
            backgroundSize: 'cover'
        }}
            className='flex justify-center items-center lg:mt-20 mt-10 px-5 lg:px-8'>
            <div className='flex-1 hidden lg:block'>
                <Zoom top>
                    <img className='mt-[-99px]' src={doctor} alt="Doctor" />
                </Zoom>
            </div>
            <Zoom right>
                <div className='flex-1 py-10'>
                    <h3 className='text-secondary font-semibold uppercase mb-2 text-lg'>Appointment</h3>
                    <h1 className='text-white font-semibold text-3xl lg:text-4xl mb-4'>Make an appointment today</h1>
                    <p className='text-white font-normal text-base mb-6'>You should make an appointment by calling or by email. Do not try to make appointments by text, unless you are simply asking a good friend if they would like to have lunch.When making an appointment you should give the person your name and the reason for wanting an appointment.</p>
                    <Link to='/appointment'>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            </Zoom>
        </section>
    );
};

export default MakeAppointment;