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
                     <img src="https://i.ibb.co/M2T5Dqy/gallery-img-1.png" alt="gallery-img-1" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/30XnVsK/gallery-img-2.png" alt="gallery-img-2" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                 </div>

                 <div className="col-md-4">
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/hfc19zF/gallery-img-3.png" alt="gallery-img-3" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/KjMSfVw/gallery-img-4.png" alt="gallery-img-4" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/dKmqr5n/gallery-img-5.png" alt="gallery-img-5" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                 </div>

                 <div className="col-md-4">
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/W2VsJQh/gallery-img-6.png" alt="gallery-img-6" border="0" />
                         <div className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </div>
                     </div>
                     <div className="gallery-item">
                     <img src="https://i.ibb.co/K7sZPWz/gallery-img-7.png" alt="gallery-img-7" border="0" />
                         <a className='gallery-item-overlay'>
                             <i className="fa-solid fa-eye"></i>
                         </a>
                     </div>
                 </div>

                 </div>
        </button>


        {isOpen && (
          <Lightbox
            isOpen
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