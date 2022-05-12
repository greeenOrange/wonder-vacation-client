import React from 'react';
import './TourGuide.css'

const TourGuide = () => {
    return (
        <div className='tour-guide my-4'>
        <div className="container">
        <div className='my-5'>
        <h2 className='fw-bold'>Tour Guide</h2>
        <p className='text-secondary'>Come explore beaches, old growth forests, tea plantations and swarming cities on a private <span className='d-block'>world tour with a friendly local guide.</span></p>
        </div>
                <div className="grid-container">
                    <div className='grid-item'>
                    <div className='tour-gider'>
                    <img  src='https://i.ibb.co/0Xhs6TD/t-4.jpg' alt="" />
                    <ul className='guider-media'>
                        <li> <a href=""><i class="fa-solid fa-at"></i></a> </li>
                        <li> <a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-discord"></i></a></li>
                    </ul>
                    </div>
                    <div className='tour-gider'>
                    <img src='https://i.ibb.co/Wk9vZr8/t-5.jpg' alt="" />
                    <ul className='guider-media'>
                        <li> <a href=""><i class="fa-solid fa-at"></i></a> </li>
                        <li> <a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-discord"></i></a></li>
                    </ul>
                    </div>
                    <div className='tour-gider'>
                    <img src='https://i.ibb.co/gzVBcSc/t-7.jpg' alt="" />
                    <ul className='guider-media'>
                        <li> <a href=""><i class="fa-solid fa-at"></i></a> </li>
                        <li> <a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li> <a href=""><i class="fa-brands fa-discord"></i></a></li>
                    </ul>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourGuide;