import React from 'react';
import { Link } from 'react-router-dom';

const VideoArea = () => {
  return (
    <div className="video-area video-bg" data-background="assets/img/bg/video_bg.jpg" style={{ backgroundImage: 'url("../../assets/img/bg/video_bg.jpg")' }}>
      <div className="video-bg-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-btn">
              <Link to="/shoppingcart" className="popup-video ripple-white"><i className="fa fa-play"></i></Link>
            
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