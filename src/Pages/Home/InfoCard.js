import React from 'react';

const InfoCard = ({ singleInfo }) => {
    const { img, title, description, bgColor } = singleInfo;
    return (
        <div className={`card lg:card-side pt-6 lg:pt-0 shadow-xl text-white ${bgColor}`}>
            <figure>
                <img className='pl-0 lg:pl-6' src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;