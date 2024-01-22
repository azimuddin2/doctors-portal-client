import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { description, img, name, location } = testimonial;

    return (
        <div className="card h-64 w-full shadow border mb-14">
            <div className="card-body pb-0">
                <p className='text-sm text-accent'>{description}</p>
                <div className='flex items-center mt-6'>
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={img} alt='people' className='w-full' />
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

export default Testimonial;