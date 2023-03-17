import React from 'react';
import chair from '../../../assets/images/chair.png';
import Button from '../../Shared/Button';
import backgroundImg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section style={{
            background: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            width: '100%',
            backgroundPosition: '100%',
        }} className='background-image'>
            <div className="hero min-h-full px-8 py-8 lg:py-20 mt-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={chair} className="w-100 rounded-lg" alt='' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold text-accent">Patient Health Care</h1>
                        <p className="py-6 text-accent text-sm"> The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal.</p>
                        <Link to='/appointment'>
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;