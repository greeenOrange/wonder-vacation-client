import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css'

const images = [
  'https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-xl1.png',
  'https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md1.png',
  'https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm1.png',
  'https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm2.png',
  'https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md3.png'
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
   

    return (
        <div className='gallery_area my-3'>
             <div className="container">
             <div className="gallery-discription">
              <h2>Travel Gallery</h2>
             <p>A concert tour is a series of concerts by an artist or group of artists in different cities, countries or locations. There’s no better way to feel the heartbeat of a city.</p>
              </div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
             <div className="row">
                 <div className="col-md-4">
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-xl1.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md1.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                 </div>

                 <div className="col-md-4">
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm1.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm2.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md2.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                 </div>

                 <div className="col-md-4">
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-xl2.png"} alt="image-gallery" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                         <img src={"https:demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md3.png"} alt="image-gallery" />
                         <a className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </a>
                     </div>
                 </div>

                 </div>
        </button>


        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
             </div>
      </div>
    );
  }
}