import React from 'react';
import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <>
            <div className='footer_section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa temporibus tempora reiciendis perspiciatis doloribus adipisci ipsam voluptatibus repudiandae esse.</p>
                        <div className="social_media">
                            <h3>Follow Us On:</h3>
                            <ul>
                                <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quick_link">
                        <h3>Quick Link</h3>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Tour Packages</a></li>
                            <li><a href="">Tour Guide</a></li>
                            <li><a href="">Booking Process</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quick_link">
                        <h3>Tour Type</h3>
                        <ul>
                            <li><a href="">Wild & Adventure Tours</a></li>
                            <li><a href="">Group Tour</a></li>
                            <li><a href="">Seasonal Tours</a></li>
                            <li><a href="">Relaxation Tours</a></li>
                            <li><a href="">family Tours</a></li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="contact">
                        <div className='d-flex justify-content-space-between align-items-center'>
                        <h2 className='mt-0'>Contact Us:</h2>
                        <p><i className="fa-solid fa-phone me-2"></i> +1763-222-9219</p>
                        <p><i className="fa-solid fa-envelope-open me-2"></i> info@wondervacation.com</p>
                        <p>Malibag-1270, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                <FooterBottom></FooterBottom>
        </>
    );
};

export default Footer;