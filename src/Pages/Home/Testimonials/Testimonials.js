import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import quote from '../../../assets/icons/quote.svg';
import useReview from '../../../hooks/useReview';
import { Zoom } from 'react-reveal';
import Testimonial from './Testimonial';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../../Shared/ErrorMessage/ErrorMessage';

const Testimonials = () => {
    const [reviews, isLoading, error] = useReview([]);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return <ErrorMessage message={error.message}></ErrorMessage>
    }

    return (
        <section className='px-5 lg:px-8 my-12'>
            <div className='flex justify-between items-center mb-8 lg:mb-12'>
                <Zoom left>
                    <div>
                        <h4 className='text-lg text-secondary font-semibold uppercase'>Testimonial</h4>
                        <h2 className='text-2xl lg:text-3xl text-accent'>What Our Patients Says</h2>
                    </div>
                </Zoom>
                <Zoom top>
                    <div>
                        <img src={quote} className='w-20 lg:w-36' alt="quote" />
                    </div>
                </Zoom>
            </div>
            <div>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#04C8A4",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "3px"
                    }}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1280: {
                            width: 1280,
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={12}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    <div>
                        {
                            reviews.map(testimonial => <SwiperSlide key={testimonial._id} className='p-1'>
                                <Testimonial testimonial={testimonial}></Testimonial>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;