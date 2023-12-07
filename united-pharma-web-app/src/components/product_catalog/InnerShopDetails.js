import React, { Component } from 'react';
import StickyHeader from '../common/StickyHeader';
import Footer from '../common/Footer';
import ItemDesc from './ItemDesc';
import RelatedProducts from './RelatedProducts';
import ProductItem from './ProductItem';

class ShopDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1
        }));
    };

    handleDecrement = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0
        }));
    };


  render() {
    return (
   
    <main className="main-area fix">
        <StickyHeader/>
        {/* Breadcrumb Area */}
        <section className="breadcrumb-area breadcrumb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        
                    </div>
                </div>
            </div>
           
        </section>
        {/* Breadcrumb Area End */}

        {/* Shop Details Area */}
        <section className="inner-shop-details-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-shop-details-flex-wrap">
                                <div className="inner-shop-details-img-wrap">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane show active" id="item-one" role="tabpanel" aria-labelledby="item-one-tab">
                                            <div className="inner-shop-details-img">
                                                <img src={require("../assets/img/product/p1.jpg")} alt="Product 1" />
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-two" role="tabpanel" aria-labelledby="item-two-tab">
                                            <div className="inner-shop-details-img">
                                                <img src={require("../assets/img/product/p1.jpg")} alt="Product 2" />
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-three" role="tabpanel" aria-labelledby="item-three-tab">
                                            <div className="inner-shop-details-img">
                                                <img src={require("../assets/img/product/p2.jpg")} alt="Product 3" />
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="item-four" role="tabpanel" aria-labelledby="item-four-tab">
                                            <div className="inner-shop-details-img">
                                                <img src={require("../assets/img/product/p3.jpg")} alt="Product 4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner-shop-details-nav-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link active" id="item-one-tab" data-bs-toggle="tab" data-bs-target="#item-one" role="tab" aria-controls="item-one" aria-selected="true">
                                                <img src={require("../assets/img/product/p1.jpg")} alt="Item 1" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-two-tab" data-bs-toggle="tab" data-bs-target="#item-two" role="tab" aria-controls="item-two" aria-selected="false">
                                                <img src={require("../assets/img/product/p2.jpg")} alt="Item 2" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-three-tab" data-bs-toggle="tab" data-bs-target="#item-three" role="tab" aria-controls="item-three" aria-selected="false">
                                                <img src={require("../assets/img/product/p3.jpg")} alt="Item 3" />
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a href="#" className="nav-link" id="item-four-tab" data-bs-toggle="tab" data-bs-target="#item-four" role="tab" aria-controls="item-four" aria-selected="false">
                                                <img src={require("../assets/img/product/p4.jpg")} alt="Item 4" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                <div className="inner-shop-details-content">
                    <h4 className="title">Herbion Naturals Cough Syrup</h4>
                    <div className="inner-shop-details-meta">
                        <ul className="list-wrap">
                            <li>Brands : <a href="shop.html">Herbion Naturals</a></li>
                            <li className="inner-shop-details-review">
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                </div>
                                <span>(4.5)</span>
                            </li>
                            <li>ID : <span>33375878</span></li>
                        </ul>
                    </div>
                    <div className="inner-shop-details-price">
                        <h2 className="price">Rs.1000.00</h2>
                        <h5 className="stock-status">- IN Stock</h5>
                    </div>
                    <p>Efficient Throat Syrup: Relieves cough, soothes throat, boosts immunity, and supports healthy bronchial passages and lung function for noticeable results.</p>
                    <div className="inner-shop-details-list">
                        <ul className="list-wrap">
                            <li>Type : <span>OTC</span></li>
                            <li>XPD : <span>19 Dec 2024</span></li>
                            <li>Brand : <span>Herbion</span></li>
                        </ul>
                    </div>
                    <div className="inner-shop-perched-info">
                        <div className="sd-cart-wrap">
                        <form action="#">
                            <div className="quickview-cart-plus-minus">
                                <input type="text" value={this.state.quantity} readOnly />
                                <div className="dec qtybutton" onClick={this.handleDecrement}>-</div>
                                <div className="inc qtybutton" onClick={this.handleIncrement}>+</div>
                            </div>
                        </form>
                        </div>
                        <a href="#" className="cart-btn">add to cart</a>
                        <a href="shop-details.html" className="wishlist-btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist"><i className="fa fa-heart"></i></a>
                    </div>
                    <div className="inner-shop-details-bottom">
                        <span><span>Tag : <a href="#">Cold Medicine</a></span></span>
                        <span>
                            <span>Categories :
                                <a href="#">Cream</a>
                                <a href="#">Syrup</a>
                                <a href="#">Capsule</a>
                                <a href="#">Powder</a>
                                <a href="#">Gel</a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            
                                {/* ... (rest of the code for product description) */}
                                <ItemDesc/>
                           
                        </div>
                    </div>
                </div>
            </section>
        {/* Shop Details Area End */}

        {/* Related Products */}
        <div className="related-products-area pb-120">
           <RelatedProducts/>
        </div>
        {/* Related Products End */}
        
    </main>
    );
  }
}

export default ShopDetails;
