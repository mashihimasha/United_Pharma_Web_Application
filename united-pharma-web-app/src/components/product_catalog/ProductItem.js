import React, { Component } from 'react';

class ProductItem extends Component {
  render() {

    return (
      <div className="col-xl-4 col-lg-4 col-md-4">
      <div className="home-shop-item inner-shop-item">
        <div className="home-shop-thumb">
          <a href="shop-details.html">
            <img src={require('../assets/img/product/home_shop_thumb01.png')} alt="img" />
            <span className="discount"> -15%</span>
          </a>
        </div>
        <div className="home-shop-content">
          <div className="shop-item-cat"><a href="#">Nutrition</a></div>
          <h4 className="title"><a href="shop-details.html">Box Full of Muscles</a></h4>
          <span className="home-shop-price">Rs.4000.00</span>
          <div className="home-shop-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-alt"></i>
            <span className="total-rating">(20)</span>
          </div>
          <div className="shop-content-bottom">
            <a href="#" className="cart"><i className="fa fa-heart"></i></a>
            <a href="#" className="btn btn-two">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ProductItem;
