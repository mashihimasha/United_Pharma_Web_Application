import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WishlistBtn extends Component {
  render() {
    return (
      <a href="#" className="cart">
        <i className="fa-eye p-3"></i>
        <FontAwesomeIcon icon="fa-regular fa-coffee" />
      </a>
    );
  }
}

export default WishlistBtn;