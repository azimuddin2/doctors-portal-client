import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const information = [
        {
            id: 1,
            img: clock,
            title: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            img: marker,
            title: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            img: phone,
            title: 'Contact us now',
            description: '+000 1883 061967',
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
    ]

    return (
        <div className='my-6 lg:my-20 px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                information.map(singleInfo => <InfoCard
                    key={singleInfo.id}
                    singleInfo={singleInfo}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;