import React, { Component } from 'react';
import '../assets/css/catalog.css';
import ProductItem from './ProductItem';

class ProductCatalog extends Component {
  render() {

    return (
        <div className='suxnix-shop-product-main row'>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            
        </div>
    );
  }
}

export default ProductCatalog;
