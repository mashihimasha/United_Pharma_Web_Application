import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area">
        {/* Footer Content */}
        <div className="footer-instagram">
          <div className="container">
            <div className="row g-0 instagram-active slick-initialized slick-slider">
              {/* Instagram Images */}
              {/* You can map through your Instagram images here */}
              {/* Example:
              {instagramImages.map((image, index) => (
                <div key={index} className="col-2 slick-slide">
                  <div className="footer-insta-item">
                    <a href={image.link} className="popup-image" tabIndex="-1">
                      <img src={image.src} alt="img" />
                    </a>
                  </div>
                </div>
              ))}
              */}
            </div>
          </div>
        </div>

        <div className="footer-top-wrap">
          <div className="container">
            <div className="footer-widgets-wrap">
              <div className="row">
                {/* About Us */}
                <div className="col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <div className="footer-about">
                      <div className="footer-logo logo">
                        <a href="index.html">
                          {/* <img src={require('')} alt="Logo" /> */}
                        </a>
                      </div>
                      <div className="footer-text">
                        <p>
                          Making beauty especially relating complot especial common questions tend to recur
                          through posts or queries standards vary orem donor command tei.
                        </p>
                      </div>
                      <div className="footer-social">
                        <a href="#">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest-p"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Us */}
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">About Us</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">About Company</a>
                      </li>
                      <li>
                        <a href="#">Affiliate Program</a>
                      </li>
                      <li>
                        <a href="#">Customer Spotlight</a>
                      </li>
                      <li>
                        <a href="#">Reseller Program</a>
                      </li>
                      <li>
                        <a href="shop.html">Our Shop</a>
                      </li>
                      <li>
                        <a href="#">Price &amp; Plans</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Support */}
                <div className="col-lg-2 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Support</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">Knowledge Base</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="#">Developer API</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="col-lg-3 col-md-5">
                  <div className="footer-widget">
                    <h4 className="fw-title">CONTACT US</h4>
                    <div className="footer-contact-wrap">
                      <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                      <ul className="list-wrap">
                        <li className="phone">
                          <i className="fas fa-phone"></i> +1 31-6555-0116
                        </li>
                        <li className="mail">
                          <i className="fas fa-envelope"></i> Suxnix@example.com
                        </li>
                        <li className="website">
                          <i className="fas fa-globe"></i> www.suxnixdomain.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Shapes */}
          <div className="footer-shape one">
            <img
              src="assets/img/others/footer_shape01.png"
              alt="img"
              className="wow fadeInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
          <div className="footer-shape two">
            <img
              src="assets/img/others/footer_shape02.png"
              alt="img"
              className="wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="copyright-text">
                  <p>Copyright © 2022 Suxnix All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="payment-card text-center text-md-end">
                  <img src="assets/img/others/card_img.png" alt="card" />
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
