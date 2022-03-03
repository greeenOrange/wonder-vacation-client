import React, { Component } from "react";
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container-fluid">
<div className="image-slider">
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/nsCLPf8/s1.jpg" alt=""/>
          </div>
          <div>
          <img src="https://i.ibb.co/LxrJgVH/s2.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/vHb9gxy/s3.jpg" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/J2nXQvr/s4.jpg" alt="" />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}