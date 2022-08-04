import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, description } = review;

    return (
        <div class="card bg-base-100 shadow-md mb-12">
            <div class="card-body">
                <p className='text-xs'>{description}</p>
                <div className='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 h-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={img} alt='people'/>
                        </div>
                        <div>
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