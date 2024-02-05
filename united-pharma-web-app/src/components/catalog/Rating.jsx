import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <>
      <div className="home-shop-rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <span className="total-rating">(20)</span>
      </div>
      </>
    );
  }
}

export default Rating;
