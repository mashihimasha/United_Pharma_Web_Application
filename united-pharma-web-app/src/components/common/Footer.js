import React, { Component } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <motion.footer
      initial={{ opacity: 0, translateY: 50 }} // Initial state (hidden)
      animate={{ opacity: 1, translateY: 0 }} // Animation when in view
      exit={{ opacity: 0, translateY: 50 }} // Animation when leaving view
      whileInView={{ opacity: 1, translateY: 0 }} // Animation while in view
      >
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
                      <div className='footer-logo logo'>
                        <a href='index.html'>
                          {/* <img src={require('')} alt='Logo' /> */}
                        </a>
                      </div>
                      <div className='footer-text'>
                        <p>
                        United Pharma
                        </p>
                      </div>
                      <div className='footer-social'>
                        <a href='https://web.facebook.com/unitedphrama/?_rdc=1&_rdr'>
                          <i className='fa fa-facebook-f'></i>
                        </a>
                        <a >
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a>
                          <i className='fa fa-pinterest-p'></i>
                        </a>
                        <a>
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
                        <a href='blog.html'>Blog</a>
                      </li>
                      
                      <li>
                        <a href='#'>FAQ</a>
                      </li>
                      
                      <li>
                        <a href='contact.html'>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Us */}
                <div className='col-lg-3 col-md-5'>
                  <div className='footer-widget'>
                    <h4 className='fw-title'>CONTACT US</h4>
                    <div className='footer-contact-wrap'>
                      <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                      <ul className='list-wrap'>
                        <li className='phone'>
                          <i className='fa fa-phone'></i> +1 31-6555-0116
                        </li>
                        <li className='mail'>
                          <i className='fa fa-envelope'></i> unitedpharma@gmail.com
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
              alt='img'
              className='wow fadeInLeft'
              data-wow-delay='.3s'
              data-wow-duration='1s'
            />
          </div>
          <div className='footer-shape two'>
            <img
              alt='img'
              className='wow fadeInRight'
              data-wow-delay='.3s'
              data-wow-duration='1s'
            />
          </div>
        </div>
        {/* Copyright */}
        <div className='copyright-wrap'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-7'>
                <div className='copyright-text'>
                  <p>Copyright © 2022 United Pharma All Rights Reserved.</p>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='payment-card text-center text-md-end'>
                  <img src='assets/img/others/card_img.png' alt='card' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </motion.footer>
    );
  }
}

export default Footer;
