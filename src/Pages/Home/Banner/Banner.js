import React from 'react';
import chairImg from '../../../assets/images/chair.png';
import backgroundImg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Button from '../../Shared/Button/Button';

const Banner = () => {
    return (
        <section
            style={{
                background: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                width: '100%',
                backgroundPosition: '100%',
            }}
            className='background-image'
        >
            <div className="hero min-h-full px-5 lg:px-8 py-5 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Fade bottom>
                        <div>
                            <img src={chairImg} className="w-100 rounded-lg" alt='Chair' />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='mt-4 lg:mt-0'>
                            <h1 className="text-3xl lg:text-5xl font-bold text-accent">Patient Health Care</h1>
                            <p className="py-4 lg:py-6 text-accent text-sm"> The online tool helps you to keep track of your health care provider visits, test results, billing, prescriptions, and so on. You can also e-mail your provider questions through the portal.</p>
                            <Link to='/appointment'>
                                <Button>Get Started</Button>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Banner;