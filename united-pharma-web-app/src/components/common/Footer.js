import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer className="footer-area not-show-instagram">
        <div className="footer-top-wrap">

            <div className="container">
                <div className="footer-widgets-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-7">
                            <div className="footer-widget">
                                <div className="footer-about">
                                    <div className="footer-logo logo">
                                        <a href="index.html"><img src={require('../assets/img/Common/Logo.jpg')} alt="Logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Embark on a revolutionary journey with us - where every drug purchase unfolds as a novel experience, blending innovation with care to redefine your path to wellness.</p>
                                    </div>
                                    <div className="footer-social">
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">About Us</h4>
                                <ul className="list-wrap">
                                    <li><a href="#">About Company</a></li>
                                    <li><a href="#">Company Branches</a></li>
                                    <li><a href="shop.html">Our Shop</a></li>
                                    <li><a href="#">Price &amp; Plans</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-5 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Support</h4>
                                <ul className="list-wrap">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5">
                            <div className="footer-widget">
                                <h4 className="fw-title">CONTACT US</h4>
                                <div className="footer-contact-wrap">
                                    <p>No.1055, Maradana Road, Punchi Borella</p>
                                    <ul className="list-wrap">
                                        <li className="phone"><i className="fa fa-phone"></i> 0912231315</li>
                                        <li className="mail"><i className="fa fa-envelope"></i> upheadoffice@gmail.com</li>
                                        <li className="website"><i className="fa fa-globe"></i> www.unitedpharma.lk</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-shape one">
            <img
                src={require('../assets/img/banner/footer_shape01.png')}
                alt="img"
                className="wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="1s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInLeft' }}
            />
            </div>
            <div className="footer-shape two">
            <img
                src={require('../assets/img/banner/footer_shape02.png')}
                alt="img"
                className="wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="1s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInRight' }}
            />
            </div>
        </div>
        <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="copyright-text">
                            <p>Copyright © 2024 United Pharma  All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="payment-card text-center text-md-end">
                            <img src={require('../assets/img/Common/visa.png')} alt="card" />
                            <img src={require('../assets/img/Common/americanexpress.png')} alt="card" />
                            <img src={require('../assets/img/Common/mastercard.png')} alt="card" />
                            <img src={require('../assets/img/Common/icons8-delivery.gif')} alt="card" style={{ height: '34px', width: '56px' }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
