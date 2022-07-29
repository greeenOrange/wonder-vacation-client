import React from 'react';
import { Parallax } from 'react-parallax';
import './Newslatter.css'

const Newslatter = () => {
    const image1 = 'https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/newslatter-bg.png';
    const insideStyles = {
        background: 'linear-gradient(rgba(45,55,60,0.8) 100%,rgba(45,55,60,0.8) 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        padding: '70px 0'
      };
    return (
        <div className='subscribe-section'>
            <Parallax bgImage={image1} strength={500} style={insideStyles}>
            <div style={{ height: 500 }}>
                <div className='subscribe-content'>
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">

                            <div className="col-md-6"> 
                            <div className="subscribe-left">
                                <div className="subscribe-details">
                                <h2>Subscribe Our <span>Newsletter</span></h2>
                                <p>Sign up to receive the best offers on promotion and <span>coupons. Don’t worry! It’s not Spam</span></p>
                                </div>
                                <form className='subscribe-form'>
                                <div className="subscribe-deals">
                                    <input type="email" name="email" placeholder='Email'/>
                                <input type="submit" value="Submit" />
                                </div>
                                </form>
                                
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="achivement">
                                    <div className="row g-4">

                                        <div className="col-md-6 ">
                                        <div className="achivement-container">
                                        <div className="achivement-icon">
                                           <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon2.svg" alt="" />
                                           </div>
                                        <div className="achivement-box">
                                            <h2>500+</h2>
                                            <h4>Awsome Tour</h4>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="achivement-container">
                                        <div className="achivement-icon">
                                           <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon3.svg" alt="" />
                                           </div>
                                        <div className="achivement-box">
                                            <h2>300+</h2>
                                            <h4>New Destinations</h4>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="achivement-container">
                                        <div className="achivement-icon">
                                           <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon1.svg" alt="" />
                                           </div>
                                        <div className="achivement-box">
                                            <h2>05+</h2>
                                            <h4>Years Experience</h4>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="achivement-container">
                                        <div className="achivement-icon">
                                           <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon4.svg" alt="" />
                                           </div>
                                        <div className="achivement-box">
                                            <h2>150+</h2>
                                            <h4>Best Mountains</h4>
                                        </div>
                                        </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Parallax>
        </div>
    );
};

export default Newslatter;