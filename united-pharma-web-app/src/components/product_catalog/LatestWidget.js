import React from 'react';

class LatestProductsWidget extends React.Component {
    render() {
        return (
            <div className="widget">
            <div className="lp-post-list">
                <ul className="lp-post-item list-wrap">
                    <li className="lp-post-thumb">
                        <a>
                            <img src={require('../assets/img/product/syrup.jpg')} alt="img" />
                        </a>
                        <div className="lp-post-content">
                            <ul className="lp-post-rating list-wrap">
                                <div className="home-shop-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                    
                                </div>
                            </ul>
                            <h4 className="title"><a href="shop-details.html">Cough Syrup</a></h4>
                            <span className="price">Rs.1000.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default LatestProductsWidget;
