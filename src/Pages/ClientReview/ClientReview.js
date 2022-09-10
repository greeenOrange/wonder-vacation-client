import  { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { useState } from 'react';
import Rating from 'react-rating';
import "swiper/css/pagination";
import "swiper/css";
import './ClientReview.css';
import ClientReveiwSkelition from '../Shared/Spinner/ClientReveiwSkelition';
const ClientReview = () => {
    const [reviewed, setReviewed] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://fierce-falls-08266.herokuapp.com/users/review")
          .then((res) => res.json())
          .then((data) => {
            setReviewed(data);
            setIsLoading(false);
        })
        .catch(error => (console.log(error)));
      }, []);

    return (
        <div className='review-section'>
        <div className="container">
            <div className="review-heading">
        <h2>What Client Say About Us</h2>
        <h4>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. <span className='d-block'>Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur</span></h4>
        </div>
            <div className="row">
                
                        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[ Navigation]}
            className="mySwiper"
          >
            {reviewed?.map((pd, index) =>(
                    isLoading ? (
                        <ClientReveiwSkelition/>
                    ) : (
            <SwiperSlide key={index}>
                <div className="col-md-12 col-sm-6 review-slider">
                <div className='review-card'>
                    <div className="reviewer-review">
                    <div className="reviewer-img">
                        <img src="https://i.ibb.co/0Xhs6TD/t-4.jpg" alt="" />
                    </div>
                    </div>
                    <div className="review-details px-2">
                        <p>{pd?.textField}</p>
                        <div className="review-rating">
                        <div className="reviewer">
                            <h3>{pd?.displayName}</h3>
                            <p>{pd?.profession}</p>
                        </div>
                        <span className='rating'><Rating
                        initialRating={pd?.review}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        fractions={2}
                        ></Rating></span>
                        </div>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            )
                    
            ))}
          </Swiper>
                    
                 {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        className="mySwiper"
        >
        {reviewed?.map ((pd, index) =>(
        <>
       <SwiperSlide>
       <div className='review-card'>
                    <div className="reviewer-review">
                    <div className="reviewer-img">
                        <img src="https://i.ibb.co/0Xhs6TD/t-4.jpg" alt="" />
                    </div>
                    </div>
                    <div className="review-details px-2">
                        <p>{pd?.textField}</p>
                        <div className="review-rating">
                        <div className="reviewer">
                            <h3>{pd?.displayName}</h3>
                            <p>{pd?.profession}</p>
                        </div>
                        <span className='rating'><Rating
                        initialRating={pd?.review}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        fractions={2}
                        ></Rating></span>
                        </div>
                    </div>
                </div>
                
       </SwiperSlide>
      </>
      )
      )}
      </Swiper> */}
      
            </div>
        
      </div>
        </div>
    );
};

export default ClientReview;