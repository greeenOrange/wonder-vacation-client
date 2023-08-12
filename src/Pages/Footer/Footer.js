import React from 'react';
import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom';
import { Link } from 'react-router-dom';

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
                                <li><Link to=""><i className="fa-brands fa-facebook"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-whatsapp"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quick_link">
                        <h3>Quick Link</h3>
                        <ul>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Tour Packages</Link></li>
                            <li><Link to="">Tour Guide</Link></li>
                            <li><Link to="">Booking Process</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="quick_link">
                        <h3>Tour Type</h3>
                        <ul>
                            <li><Link to="">Wild & Adventure Tours</Link></li>
                            <li><Link to="">Group Tour</Link></li>
                            <li><Link to="">Seasonal Tours</Link></li>
                            <li><Link to="">Relaxation Tours</Link></li>
                            <li><Link to="">family Tours</Link></li>
                        </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="contact">
                        <h2>Contact Us:</h2>
                        <div className="contact-info">
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