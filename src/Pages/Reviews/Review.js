import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, description } = review;

    return (
        <div className="card w-full shadow">
            <div className="card-body flex-grow-0">
                <p className='text-sm text-accent'>{description}</p>
                <div className='flex items-center mt-8'>
                    <div>
                        {
                            img === null ?
                                <div className="avatar placeholder">
                                    <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <span className="text-3xl">{name.slice(0, 1)}</span>
                                    </div>
                                </div>
                                :
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src={img} alt={name} />
                                    </div>
                                </div>
                        }
                    </div>
                    <div className='ml-5'>
                        <h4 className='font-semibold text-xl text-accent'>{name}</h4>
                        <p className='text-sm text-accent'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;