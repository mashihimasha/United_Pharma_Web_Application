import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../user/config/AuthContext';
import '../assets/css/style.css';
import LogoutButton from './LogoutButton';

const StickyHeader = () => {
    const {state} = useAuth();

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll < 2) {
        setIsSticky(false);
        } else {
        setIsSticky(true);
        }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    return (
        <>
        <div id="sticky-header"  className={`menu-area transparent-header ${isSticky ? 'sticky-menu' : 'sticky-menu-not'}`}
        style={{ boxShadow: isSticky ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none' }}
        >
        <div className="container custom-container">
            <div className="row">
            <div className="col-12 pl-2 pr-2">
                
                <div className="menu-wrap">
                <nav className="menu-nav">
                    <div className="logo">
                    <a href="index.html">
                    <img src={require('../assets/img/logo/logo.png')} alt="Logo" className="main-logo" />
                    </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-xl-flex">
                    <ul className="navigation">
                        <li><Link to='/'>Home</Link></li>
            
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
                        <li className="menu-item-has-children">
                        <Link to="#"><i className='fa fa-user fa-lg'></i></Link>
                        <ul className="sub-menu">
                            {!state.user && 
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                            }
                           {state.user &&  
                            <>
                                <li><Link to="/userProfile">User Account</Link></li>
                                <li><LogoutButton /></li>
                            </>
                           }
                        </ul>
                        <div className="dropdown-btn"><span className="fas fa-angle-down"></span></div>
                        </li>
                    </ul>
                    </div>
                    

                    <div className="header-action d-sm-block">
                    <ul>
                    <div className="upload-pr">
                        <Link className="btn btn-success btn-sm action-primary small rounded-pill text-white" to="/prescriptionUpload">Upload Prescription</Link>
                    </div>
                        <li className="header-shop-cart d-flex">
                        <Link to="#" className="cart-count "><i className="fa fa-shopping-cart "></i>
                            <span className="mini-cart-count">2</span>
                        </Link>
                        <div className="header-mini-cart">
                            <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                            {/* Cart items go here */}
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                                <Link to="#" className="remove remove_from_cart_button">×</Link>
                                <div className="mini-cart-img">
                                <img src={require('../assets/img/products/syrup.jpg')} alt="Product" />
                                </div>
                                <div className="mini-cart-content">
                                <h4 className="product-title"><a href="shop-details.html">Cough Syrup</a></h4>
                                <div className="mini-cart-price">1 ×
                                    <span className="woocommerce-Price-amount amount">Rs.1000.00</span>
                                </div>
                                </div>
                            </li>
                            <li className="woocommerce-mini-cart-item d-flex align-items-center">
                                <Link to="#" className="remove remove_from_cart_button">×</Link>
                                <div className="mini-cart-img">
                                <img src={require('../assets/img/products/syrup.jpg')} alt="Product" />
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
                        <li className="header-search"><Link to="#"><i className="fa fa-search"></i></Link></li>
                        
                    </ul>
                    </div>
                </nav>
                </div>
            
                
                
            </div>
            </div>
        </div>
        </div>
        </>
    );

}

export default StickyHeader;