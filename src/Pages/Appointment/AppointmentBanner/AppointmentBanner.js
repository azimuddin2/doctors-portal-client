import React from 'react';
import chair from '../../../assets/images/chair.png';
import backgroundImg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './AppointmentBanner.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section
            style={{
                background: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                width: '100%',
                backgroundPosition: '100%',
            }}
            className='px-5 lg:px-8 background-image'
        >
            <div className="hero py-8 lg:py-20">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse md:flex-row-reverse">
                    <div className='flex-1 mb-8 sm:mb-0'>
                        <img src={chair} className="w-100 rounded-lg" alt='Chair' />
                    </div>
                    <div className='flex-1'>
                        <div className="card w-80 mx-auto lg:w-96 lg:mx-auto bg-base-100 shadow-lg lg:shadow-xl">
                            <div className="card-body p-1 lg:p-8 m-0">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;