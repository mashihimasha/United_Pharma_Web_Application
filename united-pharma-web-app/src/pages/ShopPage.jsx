import React, { Component } from 'react';
import ProductItem from '../components/product_catalog/ProductItem';
import ProductCatalog from '../components/product_catalog/ProductCatalog';
import Pagination from '../components/product_catalog/Pagination';
import Header from '../components/common/StickyHeader';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Particles from "react-tsparticles"
import LatestProductsWidget from '../components/product_catalog/LatestWidget';
import Footer from '../components/common/Footer';
import PriceFilter from '../components/product_catalog/PriceFilter';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import ProductWidgetTwo from '../components/product_catalog/ProductWidgetTwo';
import ProductWidgetThree from '../components/product_catalog/ProductWidgetThree';
import './ShopPage.css';


class ShopPage extends Component {
  constructor(props) {
      super(props);
      this.state = {slider: []}
    }
   
    
  render() {
   
    return (
      <>
     <div>
      
      <Header/>
      
      <main className="main-area-fix">
      <section className="breadcrumb-area-breadcrumb-bg ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="breadcrumb-content text-center">
                  <h3 className="title">Our Shop</h3>
                  
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        {/* <a href="index.html"><span>Home</span></a> */}
                      </li>
                      {/* <li className="breadcrumb-item trail-item trail-end"><span>Our Shop</span></li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          </section>
          <ScrollToTopButton/>
        <div className="inner-shop-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                <aside className="shop-sidebar">
                  <div className="widget">
                    <h4 className="sidebar-title">Filter by Price</h4>
                    <div className="price_filter">
                    
                    <PriceFilter/>
                     
                      
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">CATEGORIES</h4>

                    <ul className="categories-list list-wrap">
                      <li><a href="shop.html">MEDICAL EQUIPMENT<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">VITAMINS & SUPPLIMENTS <i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">CHANELLING SERVICES<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">LABORATORY SERVICES<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">MOTHER & OTHER BABY PRODUCTS<i className="fa fa-angle-double-right"></i></a></li>
                      <li><a href="shop.html">PET MEDICATIONS<i className="fa fa-angle-double-right"></i></a></li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">LATEST PRODUCTS</h4>
                    
                          <LatestProductsWidget/>
                          <ProductWidgetTwo/>
                          <ProductWidgetThree/>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Product tags</h4>
                    <ul className="Product-tag-list list-wrap">
                      <li><a href="shop.html">Bone Support</a></li>
                      <li><a href="shop.html">Energy Support</a></li>
                    
                      <li><a href="shop.html">Multivitamins</a></li>
                      <li><a href="shop.html">Pre-Workout</a></li>
                   
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-8 shop-sidebar-pad order-left">
                <div className="shop-top-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="shop-top-left">
                        <p className="woocommerce-result-count shop-show-result">Showing 1-9 of 18 results</p>
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
                <div className="united-shop-product-main">

                  <div className="row">
                  <a href="/shopDetails">
                    <ProductCatalog/>
                    </a>
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

      <Footer/>



      </div>
      </>
    );
  }
}

export default ShopPage;
