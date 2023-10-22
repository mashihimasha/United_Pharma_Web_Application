import React, { Component } from 'react';
import InnerShopDetails from '../components/product_catalog/InnerShopDetails';
import Header from '../components/common/Header';

class ShopDetails extends Component {
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
                                    <h2 className="title">Shop Details</h2>
                                    <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item trail-item trail-begin">
                                                <a href="index.html"><span>Home</span></a>
                                            </li>
                                            <li className="breadcrumb-item trail-item trail-end">
                                                <span>Shop Details</span>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-shape one">
                        <img src={require('../components/assets/img/Common/video_shape01.png')} alt="shape" />
                    </div>
                    <div className="video-shape two">
                        <img src={require('../components/assets/img/Common/video_shape02.png')} alt="shape" />
                    </div>
                </section>
                <div>
                  <InnerShopDetails/>
                </div>
            </main>
            </div>
        );
    }
}

export default ShopDetails;
