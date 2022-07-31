import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section style={{
            background: `linear-gradient( rgba(255, 255, 255, 0.589), rgba(255, 255, 255, 0.589)), url(${background})`,
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            width: '100%',
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 mb-8 sm:mb-0'>
                        <img src={chair} className="lg:w-100 rounded-lg" alt='' />
                    </div>
                    <div className='flex-1'>
                        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                            <div className="card-body">
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