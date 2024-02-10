import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const imageStyle = [
   require('../../assets/img/bg/masthead-bg1.jpg'),
   require('../../assets/img/bg/masthead-bg2.jpg'),
   require('../../assets/img/bg/masthead-bg3.jpg'),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider">
      {imageStyle.map((imageStyle, index) => (
        <div className="slider-image" key={index}>
            <img src={imageStyle} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
