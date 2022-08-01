import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState, useEffect } from 'react';
import Header from '../Header';
import './HeroWrapper.css';

const HeroWrapper = () => {
    const [slider, setSlider] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderData = slider.length;


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
    let intervalTime = 6000;


    useEffect(() =>{
        fetch('./slider.json')
        .then(res => res.json())
        .then(data => setSlider(data))
    },[])

    const prevSlider = () =>{
        setCurrentSlider(currentSlider === 0 ? sliderData -1 : currentSlider -1)
        
    }
    const nextSlider = () =>{
        setCurrentSlider(currentSlider === sliderData -1 ? 0: currentSlider + 1)
    }
    function auto (){
        slideInterval = setInterval(nextSlider, intervalTime)
    }

    return (
        <>
        <Header />
        <div className='hero-wrapper'>
              <div className="blr">
              {
                slider?.map((pd, index) =>{
                        return(
                            <div className="hero-slider" key={index}>
                            { index === currentSlider && (
               <>
               <div className="slider-image">
                    <img src={pd?.images} alt="" />
                </div>
                <div className="slider-details">
                    <h2>{pd?.name}<span>{pd?.name2}</span></h2>
                    <p>{pd?.discription.slice(0,159)}</p>
                    <div className="slider-btn">
                        {/* <button className='view-btn'> <a href="">View Adventure</a></button>
                    <button className='book-btn'><a href="">Book Now</a></button> */}
                    <button type="button" className="view-btn"><a href="">View Adventure</a></button>
                    <button type="button" className="book-btn"><a href="">Book Now</a></button>
                    </div>
                </div>
                <div className="move-btn">
                <button className='left-arrow arrow' onClick={prevSlider}><FontAwesomeIcon icon={faArrowLeft}/>Pre</button>
            <button className='right-arrow arrow' onClick={nextSlider}>Next<FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
               </>
              )}
              </div>
                        )

                })} 
              </div> 
        </div>
        </>
    );
};

export default HeroWrapper;