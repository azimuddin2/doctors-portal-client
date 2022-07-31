import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <section>
            <div className='text-center mb-12 mt-14'>
                <h2 className='text-secondary font-bold mb-2'>OUR SERVICES</h2>
                <h1 className='text-4xl text-accent'>Services We Provide</h1>
            </div>
            <div className='px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;