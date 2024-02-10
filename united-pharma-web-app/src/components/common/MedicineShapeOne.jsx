import React from 'react';

const MedicineShapeOne = () => {
  return (
    <div className='footer-shape one'>
      <img
        alt='img 1'
        src={require('../assets/img/footer/footer_shape_medicine01.png')}
        className='wow fadeInLeft'
        data-wow-delay='.3s'
        data-wow-duration='1s'
        style={{
          visibility: 'visible',
          animationDuration: '2s',
          animationDelay: '0.2s',
          animationName: 'bannerFadeInLeft',
        }}
      />
    </div>
  );
};

export default MedicineShapeOne;
