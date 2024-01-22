import React from 'react';
import { Link } from 'react-router-dom';
import treatmentImg from '../../../assets/images/treatment.png';
import { Fade, Zoom } from 'react-reveal';
import Button from '../../Shared/Button/Button';

const Treatment = () => {
    return (
        <section className='px-5 lg:px-8 mt-12 lg:mt-20 lg:mb-36'>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <Zoom top>
                        <div className='flex-1'>
                            <img src={treatmentImg} className="w-80 mx-auto rounded-lg" alt='Treatment' />
                        </div>
                    </Zoom>
                    <Fade bottom>
                        <div className='flex-1'>
                            <h3 className='text-secondary font-semibold mb-2 text-lg uppercase'>Treatment</h3>
                            <h2 className='text-accent text-3xl lg:text-5xl font-bold mb-5'>Exceptional Dental Care, on Your Terms</h2>
                            <p className='text-accent mb-5 text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
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

export default Treatment;