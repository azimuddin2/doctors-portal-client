import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import quote from '../../assets/icons/quote.svg';
import useReview from '../../hooks/useReview';
import Review from './Review';
import useTitle from '../../hooks/useTitle';

const Reviews = () => {
    useTitle('Reviews');
    const [reviews] = useReview([]);

    return (
        <section className='px-5 lg:px-8 my-12'>
            <div className='flex justify-between items-center mb-8 lg:mb-12'>
                <Zoom left>
                    <div>
                        <h4 className='text-lg text-secondary font-semibold uppercase'>Testimonial</h4>
                        <h2 className='text-2xl lg:text-3xl'>What Our Patients Says</h2>
                    </div>
                </Zoom>
                <Zoom top>
                    <div>
                        <img src={quote} className='w-20 lg:w-40' alt="quote" />
                    </div>
                </Zoom>
            </div>
            <Fade bottom>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </Fade>
        </section>
    );
};

export default Reviews;