import React, { Component } from 'react';
import InnerShopDetails from '../components/product_catalog/InnerShopDetails';
import Header from '../components/common/StickyHeader';
import Footer from '../components/common/Footer';

const ShopDetails =()=> {

    // class ShopDetails extends Component 
    // render() {
        return (
            <>
          <div>
            <Header/>
            <main className="main-area fix">
                <section className="breadcrumb-area breadcrumb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                
                                        <ul className="breadcrumb p-1">
                                            <li className="breadcrumb-item trail-item trail-begin">
                                                <a href="index.html"><span>Home</span></a>
                                            </li>
                                            <li className="breadcrumb-item trail-item trail-end">
                                                <span>Shop Details</span>
                                            </li>
                                        </ul>
                                   
                            </div>
                        </div>
                    </div>
                    
                </section>
                <div>
                  <InnerShopDetails/>
                </div>
                <div>
                    <Footer/>
                </div>
            </main>
            </div>
            </>
        );
    // }
}

export default ShopDetails;
