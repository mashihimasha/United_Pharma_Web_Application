import React, { Component } from 'react';
import '../assets/css/animate.min.css';

class BannerLeaves extends Component {
  render() {

    return (
      <section className="banner-area">
       
        <div className="banner-shape one">
            <img 
                src={require('../assets/img/banner/banner_shape01.png')}
                alt="shape"
                className="wow bannerFadeInLeft"
                data-wow-delay=".2s"
                data-wow-duration="2s"
                style={{
                visibility: 'visible',
                animationDuration: '2s',
                animationDelay: '0.2s',
                animationName: 'bannerFadeInLeft',
                }}
            />
        </div>

        <div className="banner-shape two">
            <img 
                src={require('../assets/img/banner/banner_shape02.png')}
                alt="shape"
                className="wow bannerFadeInLeft"
                data-wow-delay=".2s"
                data-wow-duration="2s"
                style={{
                visibility: 'visible',
                animationDuration: '2s',
                animationDelay: '0.2s',
                animationName: 'bannerFadeInLeft',
                }}
            />
        </div>
       
      </section>
    );
  }
}

export default BannerLeaves;
