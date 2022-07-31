import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

const Review = ({ review }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>



        </div>
    );
};

export default Review;