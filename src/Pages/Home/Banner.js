import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-full p-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} className="w-100 rounded-lg" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-accent">Patient Health Care</h1>
                    <p className="py-6 text-accent"> The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal.</p>
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;