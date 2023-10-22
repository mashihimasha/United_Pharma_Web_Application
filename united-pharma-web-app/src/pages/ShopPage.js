import React, { Component } from 'react';
import ProductItem from '../components/product_catalog/ProductItem';
import ProductCatalog from '../components/product_catalog/ProductCatalog';
import Pagination from '../components/product_catalog/Pagination';
import Header from '../components/common/Header';

class ShopPage extends Component {
  render() {
    return (
     <div>
      <Header/>
      <main className="main-area fix">
        <section className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="breadcrumb-content text-center">
                  <h2 className="title">Our Shop</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="index.html"><span>Home</span></a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end"><span>Our Shop</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="video-shape one"><img src={require('../components/assets/img/Common/video_shape01.png')} alt="shape" /></div>
          <div className="video-shape two"><img src={require('../components/assets/img/Common/video_shape02.png')} alt="shape" /></div>
        </section>

        <div className="inner-shop-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                <aside className="shop-sidebar">
                  <div className="widget">
                    <h4 className="sidebar-title">Filter by Price</h4>
                    <div className="price_filter">
                      <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '26.3158%', width: '42.1053%' }}></div>
                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: '26.3158%' }}></span>
                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: '68.4211%' }}></span>
                      </div>
                      <div className="price_slider_amount">
                        <span>Price :</span>
                        <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                        <input type="submit" className="btn" value="Filter" />
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">CATEGORIES</h4>
                    <ul className="categories-list list-wrap">
                      <li><a href="shop.html">MEDICAL EQUIPMENT<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">VITAMINS & SUPPLIMENTS <i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">HEALTH & WELLNESS PRODUCT<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">BEAUTY & SKINCARE PRODUCTS<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">MOTHER & OTHER BABY PRODUCTS<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">PET MEDICATIONS<i className="fa fa-angle-double-right"></i></a></li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">LATEST PRODUCTS</h4>
                    <div className="lp-post-list">
                      <ul className="lp-post-item list-wrap">
                        <li>
                          <div className="lp-post-thumb">
                            <a href="shop-details.html"><img src={require('../components/assets/img/product/home_shop_thumb01.png')} alt="img" /></a>
                          </div>
                          <div className="lp-post-content">
                            <ul className="lp-post-rating list-wrap">
                              <li>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="title"><a href="shop-details.html">Multi Vitamin C</a></h4>
                            <span className="price">Rs.1000.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="lp-post-thumb">
                            <a href="shop-details.html"><img src={require('../components/assets/img/product/home_shop_thumb01.png')} alt="img" /></a>
                          </div>
                          <div className="lp-post-content">
                            <ul className="lp-post-rating list-wrap">
                              <li>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="title"><a href="shop-details.html">B-complex Zinc</a></h4>
                            <span className="price">Rs.2000.00</span>
                          </div>
                        </li>
                        <li>
                          <div className="lp-post-thumb">
                            <a href="shop-details.html"><img src={require('../components/assets/img/product/home_shop_thumb01.png')} alt="img" /></a>
                          </div>
                          <div className="lp-post-content">
                            <ul className="lp-post-rating list-wrap">
                              <li>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <h4 className="title"><a href="shop-details.html">Protein Powder</a></h4>
                            <span className="price">Rs.3000.00</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Product tags</h4>
                    <ul className="Product-tag-list list-wrap">
                      <li><a href="shop.html">Bone Support</a></li>
                      <li><a href="shop.html">Energy Support</a></li>
                      <li><a href="shop.html">Hair</a></li>
                      <li><a href="shop.html">Multivitamins</a></li>
                      <li><a href="shop.html">Pre-Workout</a></li>
                      <li><a href="shop.html">Protein</a></li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-8 shop-sidebar-pad order-first">
                <div className="shop-top-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="shop-top-left">
                        <p className="woocommerce-result-count shop-show-result">Showing 1-6 of 18 results</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="shop-top-right selection">
                        <form className="woocommerce-ordering mb-0" method="get">
                          <select id="shortBy" name="orderby" className="orderby form-select" aria-label="Shop order">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="suxnix-shop-product-main">
                  <div className="row">
                    
                    <ProductCatalog/>
                  
                    

                  </div>
                  <div className="pagination-wrap">
                    <Pagination/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    );
  }
}

export default ShopPage;
