import React from 'react';
import backgroundImg from '../../../assets/images/appointment.png';
import {  Fade } from 'react-reveal';

const Contact = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const contactInfo = {
            email,
            subject,
            message
        };
        console.log(contactInfo);

        form.reset();
    }

    return (
        <Fade bottom>
            <section
                style={{
                    background: `url(${backgroundImg})`,
                    width: '100%',
                    backgroundPosition: '100%',
                    backgroundSize: 'cover'
                }}
            >
                <div className='text-center py-14 px-5 lg:px-8 w-full sm:w-auto'>
                    <h4 className='font-semibold text-secondary text-lg uppercase'>Contact Us</h4>
                    <h1 className='text-3xl text-white mb-10 font-normal'>Stay connected with us</h1>
                    <form onSubmit={handleSubmit} className='grid'>
                        <input
                            className='w-full md:w-96 lg:w-96 mx-auto mb-4 p-3 rounded input-bordered focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary'
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            required
                        />
                        <input
                            className='w-full md:w-96 lg:w-96 mx-auto mb-4 p-3 rounded input-bordered focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary'
                            type="text"
                            name='subject'
                            placeholder='Subject'
                            required
                        />
                        <textarea
                            className='w-full md:w-96 lg:w-96 mx-auto mb-4 p-3 rounded h-40 input-bordered focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary'
                            name='message'
                            placeholder='Your message'
                            required
                        ></textarea>
                        <input
                            className='w-24 mx-auto btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </section>
        </Fade>
    );
};

export default Contact;