import React from 'react';
import './TourGuide.css'
import { Link } from 'react-router-dom';

const TourGuide = () => {
    return (
        <div className='tour-guide my-4'>
        <div className="container">
            <div className="row">
        <h2>Tour Guide</h2>
        <p className='text-secondary'>Come explore beaches, old growth forests, tea plantations and swarming cities on a private world tour with a friendly local guide</p>
    
                <div className="grid-container">
                    <div className='grid-item'>
                    <div className='tour-gider'>
                    <img  src='https://i.ibb.co/0Xhs6TD/t-4.jpg' alt="" loading="lazy" />
                    <ul className='guider-media'>
                        <li> <Link to=""><i className="fa-solid fa-at"></i></Link> </li>
                        <li> <Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-discord"></i></Link></li>
                    </ul>
                    </div>
                    <div className='tour-gider'>
                    <img src='https://i.ibb.co/Wk9vZr8/t-5.jpg' alt="" loading="lazy" />
                    <ul className='guider-media'>
                        <li> <Link to=""><i className="fa-solid fa-at"></i></Link> </li>
                        <li> <Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-discord"></i></Link></li>
                    </ul>
                    </div>
                    <div className='tour-gider'>
                    <img src='https://i.ibb.co/gzVBcSc/t-7.jpg' alt="" loading="lazy" />
                    <ul className='guider-media'>
                        <li> <Link to=""><i className="fa-solid fa-at"></i></Link> </li>
                        <li> <Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                        <li> <Link to=""><i className="fa-brands fa-discord"></i></Link></li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>    

            </div>
        </div>
    );
};

export default TourGuide;