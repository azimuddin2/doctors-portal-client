import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import quote from '../../../assets/icons/quote.svg';
import Review from './Review';
import useReview from '../../../hooks/useReview';

const Testimonial = () => {
    const [reviews] = useReview([]);

    return (
        <div>
            <section className='px-8 my-12'>
                <div className='flex justify-between items-center mb-12'>
                    <div>
                        <h4 className='text-lg text-secondary font-bold'>Testimonial</h4>
                        <h2 className='text-3xl'>What Our Patients Says</h2>
                    </div>
                    <div>
                        <img src={quote} className='w-24 lg:w-40' alt="quote" />
                    </div>
                </div>
                <div>
                    <Swiper className="mySwiper"
                        breakpoints={{
                            576: {
                                width: 576,
                                slidesPerView: 1,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            1200: {
                                width: 1200,
                                slidesPerView: 3,

                            },
                        }}

                        modules={[Pagination, A11y, Autoplay]}
                        spaceBetween={24}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                    >
                        <div>
                            {
                                reviews.map(review => <SwiperSlide key={review._id}>
                                    <Review review={review}></Review>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;