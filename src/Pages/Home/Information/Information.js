import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Information = () => {
    const information = [
        {
            id: 1,
            img: clock,
            title: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm Everyday',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            img: marker,
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            img: phone,
            title: 'Contact Us Now',
            description: '+000 1883 061967',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
    ];

    return (
        <section className='px-5 lg:px-8 my-5 lg:my-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    information.map(singleInfo => <InfoCard
                        key={singleInfo.id}
                        singleInfo={singleInfo}
                    ></InfoCard>)
                }
            </div>
        </section>
    );
};

export default Information;