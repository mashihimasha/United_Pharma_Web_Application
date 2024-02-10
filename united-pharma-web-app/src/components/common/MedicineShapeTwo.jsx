import React from 'react';

const MedicineShapeTwo = () => {
  return (
    <div className='footer-shape two'>
      <img
        alt='img 2'
        src={require('../assets/img/footer/footer_shape_medicine02.png')}
        className='wow fadeInRight'
        data-wow-delay='.3s'
        data-wow-duration='1s'
        style={{
          visibility: 'visible',
          animationDuration: '2s',
          animationDelay: '0.2s',
          animationName: 'bannerFadeInRight',
        }}
      />
    </div>
  );
};

export default MedicineShapeTwo;
