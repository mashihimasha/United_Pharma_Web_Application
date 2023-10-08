import React, { Component } from 'react';
import '../components/assets/css/catalog.css';
import AddCartBtn from '../components/catalog/AddCartBtn';
import WishlistBtn from '../components/catalog/WishlistBtn';
import Rating from '../components/catalog/Rating';

class ShopItem extends Component {
  render() {
    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="home-shop-item inner-shop-item">
          <div className="home-shop-thumb">
            <a href="shop-details.html">
              <img src="assets/img/products/home_shop_thumb01.png" alt="img" />
              <span className="discount"> -15%</span>
            </a>
          </div>
          <div className="home-shop-content">
            <div className="shop-item-cat"><a href="#">Nutrition</a></div>
            <h4 className="title"><a href="shop-details.html">Box Full of Muscles</a></h4>
            <span className="home-shop-price">$85.99</span>
            <div className="home-shop-rating">
              <Rating/>
            </div>
            <div className="shop-content-bottom">
                <WishlistBtn/>
                <AddCartBtn/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
