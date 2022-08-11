import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import bgAppointment from '../../assets/images/appointment.png';
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bgAppointment})`,
            width: '100%',
            backgroundPosition: '100%',
            backgroundSize: 'cover'
        }}
            className='flex justify-center items-center lg:mt-20 px-8 mt-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 py-8'>
                <h3 className='text-secondary font-bold mb-2'>Appointment</h3>
                <h1 className='text-white font-semibold text-4xl mb-4'>Make an appointment Today</h1>
                <p className='text-white font-normal text-sm mb-6'>You should make an appointment by calling or by email. Do not try to make appointments by text, unless you are simply asking a good friend if they would like to have lunch.When making an appointment you should give the person your name and the reason for wanting an appointment.</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;