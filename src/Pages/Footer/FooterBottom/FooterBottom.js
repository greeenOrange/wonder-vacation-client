import React from 'react';
import './FooterBottom.css'
import { Link } from 'react-router-dom';
const FooterBottom = () => {
    return (
        <div className='tour-footer'>
            <div className="container">
                <div className='tour-copyright'>
                <div className="tour-info">
                <p>Copyright&copy;2022 WonderTour|Design By ylSadiq.</p>
                <h2>WonderTour</h2>
                <div className='footer-menu'>
                <Link to="">Terms & Condition</Link>
                <Link to="">Privacy Policy</Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;