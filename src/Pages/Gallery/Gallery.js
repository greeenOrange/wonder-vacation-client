import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className='gallery_area'>
            <div className="container">
            <h2>Tour Gallery</h2>
            <p>A concert tour is a series of concerts by an artist or group of artists in different cities, countries or locations.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-xl1.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-md1.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-sm1.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-sm2.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-md2.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-xl2.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                    <div className="gallery-item">
                        <img src="https://demo-egenslab.b-cdn.net/html/tourxpro/assets/images/gallary/g-md3.png" alt="image-gallery" />
                        <a className='gallery-item-overlay' href="">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;