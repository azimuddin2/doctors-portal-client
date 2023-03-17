import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center text-accent">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </div>
    );
};

export default Service;