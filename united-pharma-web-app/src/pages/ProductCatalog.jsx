import React, { Component } from 'react';
import '../components/assets/css/catalog.css';
import AddCartBtn from '../components/catalog/AddCartBtn';
import WishlistBtn from '../components/catalog/WishlistBtn';
import Rating from '../components/catalog/Rating';
import ProductName from '../components/catalog/ProductName';
import Category from '../components/catalog/Category';
import ProductThumbnail from '../components/catalog/Thumbnail';

class ShopItem extends Component {
  render() {
    return (
      <>
      
      <div class="card p-3 m-2 ms-5" style={{ width: '18rem' }}>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="home-shop-item inner-shop-item">
          <div className="home-shop-thumb"><ProductThumbnail/></div>
          <div className="home-shop-content">
            <div className="shop-item-cat"><Category/></div>
            <div className="title"><ProductName/></div>
            <div className="home-shop-rating"><Rating/></div>
            <div className="shop-content-bottom">
                <WishlistBtn/>
                <AddCartBtn/>
            </div>
          </div>
        </div>
      </div></div>
      </>
    );
  }
}

export default ShopItem;
