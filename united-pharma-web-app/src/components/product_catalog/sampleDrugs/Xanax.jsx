import React from 'react';
import '../../assets/css/catalog.css';
import Button from 'react-bootstrap/Button';

const Xanax = ()=>{
    return(
        <>
        <div className="col-xl-3 col-lg-12 col-md-4">
      <div className="home-shop-item inner-shop-item">
        <div className="home-shop-thumb">
          <a href="shop-details.html">
            <img src={require('../../assets/img/product/xanax.jpg')} alt="img" />
            <span className="discount"> -12%</span>
          </a>
        </div>
        <div className="home-shop-content">
          <div className="shop-item-cat"><a href="#">Rx</a></div>
          <h4 className="title"><a href="shop-details.html">Xanax Tablets</a></h4>
          <span className="home-shop-price">Rs.620.00</span>
          <div className="home-shop-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            
            <span className="total-rating">(20)</span>
          </div>
          <div className="shop-content-bottom" style={{ display: 'flex', justifyContent: 'flex-left' }}>
            <div>
            <a href="#" className="cart"><i className="fa fa-heart"></i></a>
            </div>
            <Button variant="d-flex justify-content-center align-items-center" style={{ marginLeft: '70px', marginRight: '0px', width: '40%' , padding: '8px 20px' }}>
            BUY
            </Button>

          </div>
        </div>
      </div>
    </div>

        
        </>
    )
}
export default Xanax;



