import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';
import background from '../../assets/images/bg.png';
import './Banner.css'

const Banner = () => {
    return (
        <section style={{
            background: `linear-gradient(rgba(255, 255, 255, 0.39), rgba(255, 255, 255, 0.295)), url(${background})`,
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            width: '100%',
            // height: '100%'
            }}>
            <div className="hero min-h-full px-8 py-20 mt-2">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} className="w-100 rounded-lg" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-accent">Patient Health Care</h1>
                    <p className="py-6 text-accent text-sm"> The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;