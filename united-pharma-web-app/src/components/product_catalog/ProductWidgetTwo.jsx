import React from 'react';

const ProductWidgetTwo =()=>{
    
        return (
            <>
            <div className="widget">
            <div className="lp-post-list">
                <ul className="lp-post-item list-wrap">
                    <li className="lp-post-thumb">
                        <a>
                            <img src={require('../assets/img/product/Tetracycline.jpg')} alt="img" />
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
                            <h4 className="title"><a href="shop-details.html">TetraCyclin Capsules</a></h4>
                            <span className="price">Rs.450.00</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
        );
    }


export default ProductWidgetTwo;
