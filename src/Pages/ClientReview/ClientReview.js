import React from 'react';
import './ClientReview.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const ClientReview = () => {

    return (
        <div className='review-section'>
        <div className="container">
        <div className="review-heading">
        <h2>What Our Client Say About Us</h2>
        <h4>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. <span className='d-block'>Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur</span></h4>
        </div>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='review-card'>
                <div className="reviewer-review">
                <div className="reviewer-img">
                    <img src="https://i.ibb.co/0Xhs6TD/t-4.jpg" alt="" />
                </div>
                </div>
                <div className="review-details">
                    <p>consectetur ad quaerat. Tempora, nisi error numquam quod qui laboriosam accusantium?</p>
                    <div className="review-rating">
                    <div className="reviewer">
                        <h3>Shwan Pull</h3>
                        <p>Traveller</p>
                    </div>
                    <p>review</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='review-card'>
                <div className="reviewer-review">
                <div className="reviewer-img">
                    <img src="https://i.ibb.co/Wk9vZr8/t-5.jpg" alt="" />
                </div>
                </div>
                <div className="review-details">
                    <p>consectetur ad quaerat. Tempora, nisi error numquam quod qui laboriosam accusantium?</p>
                    <div className="review-rating">
                    <div className="reviewer">
                        <h3>Shwan Pull</h3>
                        <p>Traveller</p>
                    </div>
                    <p>review</p>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='review-card'>
                <div className="reviewer-review">
                <div className="reviewer-img">
                    <img src="https://i.ibb.co/gzVBcSc/t-7.jpg" alt="" />
                </div>
                </div>
                <div className="review-details">
                    <p>consectetur ad quaerat. Tempora, nisi error numquam quod qui laboriosam accusantium?</p>
                    <div className="review-rating">
                    <div className="reviewer">
                        <h3>Shwan Pull</h3>
                        <p>Traveller</p>
                    </div>
                    <p>review</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
        </div>
    );
};

export default ClientReview;