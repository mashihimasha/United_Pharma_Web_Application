import React, { Component } from 'react';
import ScrollToTopButton from './ScrollToTopButton';

class StickyHeader extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  };
  state = {
    isMobileMenuOpen: false,
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // Update the state based on the scroll position
    this.setState({
      scrolled: window.scrollY > 1000, // Adjust this threshold as needed
    });
  };

  render() {
    const { scrolled, isMobileMenuOpen } = this.state;
    return (
      <>
      <div id="sticky-header" className="menu-area transparent-header sticky-menu">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12 pl-2 pr-2">
              <div className="mobile-nav-toggler" onClick={this.toggleMobileMenu}>
                <i className="fa fa-th-large" ></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="index.html">
                    <img style={{maxWidth:"70px", height:"70px"}} src={require('../assets/img/Common/Logo.jpg')} alt="Logo" className="main-logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      <li><a href="index.html#home">Home</a></li>
          
                      <li className="menu-item-has-children active"><a href="shop.html">Shop</a>
                        <ul className="sub-menu">
                          <li className="active"><a href="shop.html">Our Shop</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>
                      </li>
                      <li><a href="index.html#pricing">Wholesale</a></li>
                      <li><a href="index.html#home">Checkout</a></li>
                      <li className="menu-item-has-children"><a href="index.html#news">News</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">Our Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>
                      </li>
                      <li><a href="contact.html">contacts</a></li>
                      <li><a href="index.html#about">About</a></li>
                    </ul>
                  </div>
                  

                  <div className="header-action d-sm-block">
                    <ul>
                    <div className="upload-pr">
                      <a className="action-primary" href="/pres/customer/index/">Upload Prescription</a>
                    </div>
                      <li className="header-shop-cart d-flex">
                        <a href="#" className="cart-count "><i className="fa fa-shopping-cart "></i>
                          <span className="mini-cart-count">2</span>
                        </a>
                        <div className="header-mini-cart">
                          <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                            {/* Cart items go here */}
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                              <a href="#" className="remove remove_from_cart_button">×</a>
                              <div className="mini-cart-img">
                                <img src={require('../assets/img/product/syrup.jpg')} alt="Product" />
                              </div>
                              <div className="mini-cart-content">
                                <h4 className="product-title"><a href="shop-details.html">Cough Syrup</a></h4>
                                <div className="mini-cart-price">1 ×
                                  <span className="woocommerce-Price-amount amount">Rs.1000.00</span>
                                </div>
                              </div>
                            </li>
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                              <a href="#" className="remove remove_from_cart_button">×</a>
                              <div className="mini-cart-img">
                                <img src={require('../assets/img/product/syrup.jpg')} alt="Product" />
                              </div>
                              <div className="mini-cart-content">
                                <h4 className="product-title"><a href="shop-details.html">Cough Syrup</a></h4>
                                <div className="mini-cart-price">2 ×
                                  <span className="woocommerce-Price-amount amount">Rs.2000.00</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          {/* Subtotal and Checkout buttons go here */}
                          <p className="woocommerce-mini-cart__total">
                            <strong>Subtotal:</strong>
                            <span className="woocommerce-Price-amount">Rs.3000.00</span>
                          </p>
                          <p className="checkout-link">
                            <a href="shop-details.html" className="button wc-forward">View cart</a>
                            <a href="shop-details.html" className="button checkout wc-forward">Checkout</a>
                          </p>
                        </div>
                      </li>
                      <li className="header-search"><a href="#"><i className="fa fa-search"></i></a></li>
                      <li className="offCanvas-btn d-flex d-xl-block"><a href="#" className="navSidebar-button"><i className="fa fa-th-large"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            
              
              {/* Mobile Menu */}
              <div className={`mobile-menu ${this.state.isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="menu-box">
                  <div className="close-btn"><i className="fa fa-times"></i></div>
                  <div className="nav-logo">
                    <a href="index.html"><img src={require('../assets/img/Common/Logo.jpg')} alt="Logo" /></a>
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
              {this.state.isMobileMenuOpen && <div className="menu-backdrop" onClick={this.toggleMobileMenu}></div>}
              
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default StickyHeader;
