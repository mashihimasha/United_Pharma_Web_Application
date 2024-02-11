import React, { Component } from 'react';
import '../assets/css/catalog.css';
import ProductItem from './ProductItem';
import Gabapentin from './sampleDrugs/Gabapentin';
import Tramadol from './sampleDrugs/Tramadol';
import Erythromycin from './sampleDrugs/Erythromycin';
import Tetracyclin from './sampleDrugs/Tetracyclin';
import Xanax from './sampleDrugs/Xanax';
import Enogra from './sampleDrugs/Enogra';
import Thyroxin from './sampleDrugs/Thyroxin';


const ProductCatalog = () => {
  

    return (
      <>
        <div className='suxnix-shop-product-main row'>

            <ProductItem/>
            <Gabapentin/>
            <Tramadol/>
            <Erythromycin/>
            <Tetracyclin/>
            <Xanax/>
            <Enogra/>
            <Thyroxin/>

        </div>
        </>
    );
  }


export default ProductCatalog;
