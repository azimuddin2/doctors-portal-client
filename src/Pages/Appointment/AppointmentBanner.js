import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';

const AppointmentBanner = () => {
    return (
        <section style={{
            background: `url(${background})`,
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            width: '100%',
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 '>
                        <img src={chair} className="lg:w-100 rounded-lg" alt='' />
                    </div>
                    <div className='flex-1'>
                        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;