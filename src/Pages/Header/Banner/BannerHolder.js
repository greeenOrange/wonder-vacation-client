import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { sliderData } from './HeroSection';

const BannerHolder = () => {
    const [slider, setSlider] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderLength = sliderData.length;
    
    useEffect(() =>{
        setCurrentSlider(0)
    }, [])

    useEffect(() =>{
        if(autoScroll){
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlider])

    const autoScroll = true;
    let slideInterval ;
    let intervalTime = 5000;

    const goToPrev = () =>{
        setCurrentSlider(currentSlider === 0 ? sliderLength-1 : currentSlider -1)
        
    }
    const goToNext = () =>{
        setCurrentSlider(currentSlider === sliderLength -1 ? 0: currentSlider + 1)
    }
    function auto (){
        slideInterval = setInterval(goToNext, intervalTime)
    }
    return (
        <>        
        <div className='main-banner-section'>
            <div className="container">
            <FontAwesomeIcon className='left-arrow' icon={faArrowLeft} onClick={goToPrev}/>
            <FontAwesomeIcon className='right-arrow' icon={faArrowRight} onClick={goToNext}/>
                    {
                        sliderData?.map((pd, index)=>(
                <div className={index === currentSlider ? "slide currrent": "slide"} key={index}>
                      { index === currentSlider && (
                      <div>
                      <img src={pd.images} alt="" />  
                      </div>
                      )}
                </div>
                        ))}
            </div>
        </div>
        </>
    );
};

export default BannerHolder;