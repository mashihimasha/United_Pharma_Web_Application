import React, { Component } from 'react';

class ProductThumbnail extends Component {
  render() {
    return (
      <>
      <div className="home-shop-thumb">
        <a href="shop-details.html">
          <img src={require('../assets/img/catalog/1.png')} alt="img" />
          <span className="discount"> -15%</span>
        </a>
      </div>
      </>
    );
  }
}

export default ProductThumbnail;
