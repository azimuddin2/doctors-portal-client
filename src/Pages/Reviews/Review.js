import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, description } = review;

    return (
        <div className="card h-64 bg-base-100 shadow">
            <div className="card-body pb-0">
                <p className='text-sm'>{description}</p>
                <div className='flex items-center mt-6'>
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={img} alt='people' className='w-full'/>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-semibold text-xl text-accent'>{name}</h4>
                            <p className='text-sm'>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;