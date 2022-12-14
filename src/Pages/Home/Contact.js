import React from 'react';
import background from '../../assets/images/appointment.png'

const Contact = () => {

    const handleContactForm = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const contactInfo = { email, subject, message };
        console.log(contactInfo);

        event.target.reset();
    }

    return (
        <section style={{
            background: `url(${background})`,
            width: '100%',
            backgroundPosition: '100%',
            backgroundSize: 'cover'
        }}>
            <div className='text-center py-14 px-8 w-full sm:w-auto'>
                <h4 className='font-bold text-secondary text-xl'>Contact Us</h4>
                <h1 className='text-3xl text-white mb-10 font-normal'>Stay connected with us</h1>
                <form onSubmit={handleContactForm} className='grid'>
                    <input className='w-80 mx-auto md:w-96 md:mx-auto lg:w-96 lg:mx-auto mb-4 py-2 px-2 rounded' type="email" name="email" id="" placeholder='Email Address' required />
                    <input className='w-80 mx-auto md:w-96 md:mx-auto lg:w-96 lg:mx-auto mb-4 py-2 px-2 rounded' type="text" name='subject' placeholder='Subject' required />
                    <textarea className='w-80 mx-auto md:w-96 md:mx-auto lg:w-96 lg:mx-auto  mb-4 py-2 h-40 px-2 rounded' name='message' placeholder='Your message' required></textarea>
                    <input className='w-24 mx-auto btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary' type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Contact;