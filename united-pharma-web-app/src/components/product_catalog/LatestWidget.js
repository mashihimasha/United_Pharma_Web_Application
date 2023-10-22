import React from 'react';

class LatestProductsWidget extends React.Component {
    render() {
        return (
            <div className="widget">
                <div className="lp-post-list">
                    <ul className="lp-post-item list-wrap">
                        <li>
                            <div className="lp-post-thumb">
                                <a href="shop-details.html"><img src={require("../assets/img/product/Item.png" )} alt="img" /></a>
                                <div className="lp-post-content">
                                <ul className="lp-post-rating list-wrap">
                                <div className="home-shop-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                    <span className="total-rating">(20)</span>
                                </div>
                                </ul>
                                <h4 className="title"><a href="shop-details.html">Multi vitamin C</a></h4>
                                <span className="price">$29.00</span>
                            </div>
                            </div>
                            
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default LatestProductsWidget;
