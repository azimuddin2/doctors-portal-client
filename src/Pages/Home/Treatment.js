import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Button from '../Shared/Button';

const Treatment = () => {
    return (
        <section className='px-8 mt-12'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex-1'>
                        <img src={treatment} class="w-80 mx-auto rounded-lg" alt='' />
                    </div>
                    <div className='flex-1'>
                        <h3 className='text-secondary font-bold mb-2'>Treatment</h3>
                        <h2 className='text-accent text-5xl font-bold mb-6'>Exceptional Dental Care, on Your Terms</h2>
                        <p className='text-accent text-sm mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;