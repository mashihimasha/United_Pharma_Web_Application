import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';

const VideoArea = () => {
  return (
    <div className="video-area video-bg" data-background="assets/img/bg/video_bg.jpg" style={{ backgroundImage: 'url("../../assets/img/bg/video_bg.jpg")' }}>
      <div className="video-bg-overlay"></div>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-12">
            <SimpleSlider/>
            <div className="video-btn top-50">
              <Link to="/shoppingcart" className="ripple-white  d-flex align-items-center"><h6 className='fw-bolder'>Start Shopping</h6></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="video-shape one"><img src={require('../../assets/img/others/video_shape01.png')} alt="shape" /></div>
      <div className="video-shape two"><img src={require('../../assets/img/others/video_shape02.png')} alt="shape" /></div>
    </div>
  );
};

export default VideoArea;