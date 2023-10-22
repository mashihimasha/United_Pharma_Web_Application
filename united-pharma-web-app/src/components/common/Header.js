import React, { Component } from 'react';

class StickyHeader extends Component {
  render() {
    return (
      <div id="sticky-header" className="menu-area transparent-header sticky-menu">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler"><i className="flaticon-layout"></i></div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="index.html">
                      <img src={require("../assets/img/Common/Logo.jpg")} alt="Logo" className="main-logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      <li><a href="index.html#home">Home</a></li>
                      <li><a href="index.html#ourshop">Our Shop</a></li>
                      <li><a href="index.html#paroller">Product</a></li>
                      <li><a href="index.html#contact">Contact</a></li>
                      <li><a href="index.html#blog">Blog</a></li>
                      <li><a href="index.html#news">News</a></li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-sm-block">
                    <ul>
                      <li className="header-shop-cart">
                        <a href="#" className="cart-count"><i className="flaticon-shopping-cart"></i>
                          <span className="mini-cart-count">2</span>
                        </a>
                        <div className="header-mini-cart">
                          <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                              <a href="#" className="remove remove_from_cart_button">×</a>
                              <div className="mini-cart-img">
                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="Product" />
                              </div>
                              <div className="mini-cart-content">
                                <h4 className="product-title"><a href="shop-details.html">Antiaging and Longevity</a></h4>
                                <div className="mini-cart-price">1 ×
                                  <span className="woocommerce-Price-amount amount">Rs.2000</span>
                                </div>
                              </div>
                            </li>
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                              <a href="#" className="remove remove_from_cart_button">×</a>
                              <div className="mini-cart-img">
                                <img src={require('../assets/img/Common/cart_2.jpg')} alt="Product" />
                              </div>
                              <div className="mini-cart-content">
                                <h4 className="product-title"><a href="shop-details.html">Branched Chain Amino Acids</a></h4>
                                <div className="mini-cart-price">2 ×
                                  <span className="woocommerce-Price-amount amount">Rs.1000</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <p className="woocommerce-mini-cart__total">
                            <strong>Subtotal:</strong>
                            <span className="woocommerce-Price-amount">Rs.3000</span>
                          </p>
                          <p className="checkout-link">
                            <a href="shop-details.html" className="button wc-forward">View cart</a>
                            <a href="shop-details.html" className="button checkout wc-forward">Checkout</a>
                          </p>
                        </div>
                      </li>
                      <li className="header-search"><a href="#"><i className="flaticon-search"></i></a></li>
                      <li className="offCanvas-btn d-none d-xl-block"><a href="#" className="navSidebar-button"><i className="flaticon-layout"></i></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fas fa-times"></i></div>
                  <div className="nav-logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                  <div className="menu-outer">
                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                    <ul className="navigation">
                      <li><a href="index.html#home">Home</a></li>
                      <li><a href="index.html#features">Features</a></li>
                      <li><a href="index.html#paroller">Product</a></li>
                      <li><a href="index.html#ingredient">Ingredient</a></li>
                      <li><a href="index.html#pricing">Pricing</a></li>
                      <li className="menu-item-has-children active"><a href="shop.html">Shop</a>
                        <ul className="sub-menu">
                          <li className="active"><a href="shop.html">Our Shop</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>
                      </li>
                      <li className="menu-item-has-children"><a href="index.html#news">News</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">Our Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>
                      </li>
                      <li><a href="contact.html">contacts</a></li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StickyHeader;
