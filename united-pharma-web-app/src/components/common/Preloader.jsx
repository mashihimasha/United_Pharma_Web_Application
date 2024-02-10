import React, { useEffect } from 'react';
import $ from 'jquery';

const Preloader = () => {
  useEffect(() => {
    // Preloader function
    const preloader = () => {
      $('#preloader').delay(0).fadeOut();
    };

    // Function to run on window load
    const handleWindowLoad = () => {
      preloader();
    };

    // Attach the event listener for window load
    window.addEventListener('load', handleWindowLoad);

    // Cleanup function
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div id="preloader">
      <div className="tg-cube-grid">
        <div className="tg-cube tg-cube1"></div>
        <div className="tg-cube tg-cube2"></div>
        <div className="tg-cube tg-cube3"></div>
        <div className="tg-cube tg-cube4"></div>
        <div className="tg-cube tg-cube5"></div>
        <div className="tg-cube tg-cube6"></div>
        <div className="tg-cube tg-cube7"></div>
        <div className="tg-cube tg-cube8"></div>
        <div className="tg-cube tg-cube9"></div>
      </div>
    </div>
  );
};

export default Preloader;
