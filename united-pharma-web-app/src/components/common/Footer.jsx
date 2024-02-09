import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const logoStyle = {
    width: '80px',
    height: 'auto', 
  };
    return (
      <footer className='footer-area'>
        {/* Footer Content */}
        <div className='footer-top-wrap'>
          <div className='container'>
            <div className='footer-widgets-wrap'>
              <div className='row'>
                {/* About Us */}
                <div className='col-lg-3 col-md-7'>
                  <div className='footer-widget'>
                    <div className='footer-about'>
                      <div className='footer-logo logo d-flex flex-row flex-nowrap align-items-center'>
                        <Link to='/'>
                          <img src={require('../assets/img/footer/logo.png')} alt='Logo' style={logoStyle}/>
                        </Link>
                        <div className='footer-text'>
                          <p className='small fw-bold'>
                          United Pharma
                          </p>
                        </div>
                      </div>
                      
                      <div className='footer-social'>
                        <a href='https://web.facebook.com/unitedphrama/?_rdc=1&_rdr'>
                          <i className='fa fa-facebook-f'></i>
                        </a>
                        <a href="https://web.facebook.com/unitedphrama/?_rdc=1&_rdr">
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href="https://web.facebook.com/unitedphrama/?_rdc=1&_rdr">
                          <i className='fa fa-pinterest-p'></i>
                        </a>
                        <a href="https://web.facebook.com/unitedphrama/?_rdc=1&_rdr">
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Us */}
                <div className='col-lg-2 col-md-5 col-sm-6'>
                  <div className='footer-widget'>
                    <h4 className='fw-title'>Company</h4>
                    <ul className='list-wrap'>
                      <li>
                        <Link>About Us</Link>
                      </li>
                      <li>
                        <Link>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link>Terms & Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Products */}
                <div className='col-lg-2 col-md-5 col-sm-6'>
                  <div className='footer-widget'>
                    <h4 className='fw-title'>Products</h4>
                    <ul className='list-wrap'>
                      <li>
                        <Link>Medicine</Link>
                      </li>
                      <li>
                        <Link>Medical Equipment</Link>
                      </li>
                      <li>
                        <Link>Personal Care</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Support */}
                <div className='col-lg-2 col-md-5 col-sm-6'>
                  <div className='footer-widget'>
                    <h4 className='fw-title'>Support</h4>
                    <ul className='list-wrap'>
                     
                      <li>
                        <Link to='/blog'>Blog</Link>
                      </li>
                      
                      <li>
                        <Link to='/faq'>FAQ</Link>
                      </li>
                      
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Us */}
                <div className='col-lg-3 col-md-5'>
                  <div className='footer-widget'>
                    <h4 className='fw-title'>CONTACT US</h4>
                    <div className='footer-contact-wrap'>
                      <Link to="/storelocator" className='text-white fw-bolder'><i className='fa fa-map-marker fa-lg me-2'></i> Store Locator</Link>
                      <ul className='list-wrap'>
                        <li className='phone'>
                          <i className='fa fa-phone'></i> 070 298 6911
                        </li>
                        <li className='address'>
                          <i className='fa fa-location-arrow'></i> 299/17 Galle Road, Panadura
                        </li>
                        <li className='mail'>
                          <i className='fa fa-envelope'></i> upheadoffice@gmail.com
                        </li>
                        <li className='website'>
                          <i className='fa fa-globe'></i> www.unitedpharma.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Shapes */}
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
        </div>
        {/* Copyright */}
        <div className='copyright-wrap'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-7'>
                <div className='copyright-text'>
                  <p className='fw-bolder'>Copyright © 2023 United Pharma All Rights Reserved.</p>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='payment-card text-center text-md-end'>
                  <img src={require('../assets/img/footer/card_img.png')} alt='card' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
