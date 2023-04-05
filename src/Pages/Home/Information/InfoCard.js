import React from 'react';
import { Fade } from 'react-reveal';

const InfoCard = ({ singleInfo }) => {
    const { img, title, description, bgColor } = singleInfo;

    return (
        <Fade bottom>
            <div className={`card lg:card-side pt-6 lg:pt-0 shadow-xl text-white ${bgColor}`}>
                <figure>
                    <img className='pl-0 lg:pl-6' src={img} alt={title} />
                </figure>
                <div className="card-body pt-4 lg:pt-8">
                    <h2 className="card-title justify-center lg:justify-start">{title}</h2>
                    <p className='text-center lg:text-left'>{description}</p>
                </div>
            </div>
        </Fade>
    );
};

export default InfoCard;