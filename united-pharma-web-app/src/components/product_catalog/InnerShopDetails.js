import React, { Component } from 'react';

class InnerShopDetails extends Component {
    render() {
        return (
        
            <section className="inner-shop-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-shop-details-flex-wrap">
                                <div className="inner-shop-details-img-wrap">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane show active" id="item-one" role="tabpanel" aria-labelledby="item-one-tab">
                                            <div className="inner-shop-details-img">
                                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-shop-details-nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link active" id="item-one-tab" data-bs-toggle="tab" data-bs-target="#item-one" role="tab" aria-controls="item-one" aria-selected="true">
                                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-two-tab" data-bs-toggle="tab" data-bs-target="#item-two" role="tab" aria-controls="item-two" aria-selected="false">
                                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link active" id="item-one-tab" data-bs-toggle="tab" data-bs-target="#item-one" role="tab" aria-controls="item-one" aria-selected="true">
                                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link active" id="item-one-tab" data-bs-toggle="tab" data-bs-target="#item-one" role="tab" aria-controls="item-one" aria-selected="true">
                                                <img src={require('../assets/img/Common/cart_1.jpg')} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="inner-shop-details-content">
                                <h4 className="title">Natural Vitamin Supplement</h4>
                                <div className="inner-shop-details-meta">
                                <ul className="list-wrap">
                                    <li>Type : <span>Supplement</span></li>
                                    <li>XPD : <span>19 Dec 2022</span></li>
                                    <li>CO : <span>United Pharma</span></li>
                                </ul>
                                </div>
                                <div className="inner-shop-details-price">
                                    <h2 className="price">Rs.3000.00</h2>
                                    <h5 className="stock-status">- IN Stock</h5>
                                </div>
                                <p>this food is food produced by methods complying with the standards of Organic farming. Standards vary worldwide, but organic farming.</p>
                                <div className="inner-shop-details-list">
                                    <ul className="list-wrap">
                                        <li>Type : <span>Supplement</span></li>
                                        {/* Add more list items for product details */}
                                    </ul>
                                </div>
                                <div className="inner-shop-perched-info">
                                    <div className="sd-cart-wrap">
                                        <form action="#">
                                            <div className="quickview-cart-plus-minus">
                                                <input type="text" value="1" />
                                                <div className="dec qtybutton">-</div>
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                        </form>
                                    </div>
                                    <a href="#" className="cart-btn">add to cart</a>
                                    <a href="shop-details.html" className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                        <i className="fa fa-heart"></i>
                                    </a>
                                </div>
                                <div className="inner-shop-details-bottom">
                                    <span><span>Tag : <a href="#">Natural Vitamin</a></span></span>
                                    <span>
                                        <span>Categories :
                                        <a href="#">Vitamin</a>
                                        <a href="#">Protein</a>
                                        <a href="#">Capsule</a>
                                        <a href="#">Powder</a>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-desc-wrap">
                                <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" role="tab" aria-controls="description" aria-selected="true">
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                            <a href="#" className="nav-link" id="information-tab" data-bs-toggle="tab" data-bs-target="#information" role="tab" aria-controls="information" aria-selected="false">
                                             Additional information
                                            </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" id="information-tab" data-bs-toggle="tab" data-bs-target="#information" role="tab" aria-controls="information" aria-selected="false">
                                            Additional information
                                        </a>
                                   </li>
                                </ul> 
                                <div className="tab-content" id="myTabContentTwo">
                                    <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        <div className="product-desc-content">
                                            <h4 className="title">The true strength of Suxnix :</h4>
                                            <p>Whey Protein Isolates (WPIs) are the purest form of whey protein that currently exists. WPIs are costly to use, but rate among the best proteins that money can buy. 
                                                That’s why they’re the first ingredient you read on the Gold Standard 100% Whey™ label. By using WPI as the primary ingredient along with premium ultra-filtered 
                                                whey protein concentrate (WPC), we’re able to pack 24 grams of protein into every serving to support your muscle building needs after training. ON’attention to 
                                                detail also extends to mixability. This superior quality powder has been instantized to mix easliy using a shaker cup or just a glass and spoon. There’s no doubt 
                                                that this is the standard by which all other whey proteins are measured.</p>
                                            
                                        </div>
                                    </div>
                                    {/* Add more tab-pane sections for additional information and reviews */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InnerShopDetails;
