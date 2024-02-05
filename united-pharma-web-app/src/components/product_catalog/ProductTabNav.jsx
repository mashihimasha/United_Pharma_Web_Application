import React, { Component } from 'react';

class ProductTabNav extends Component {
  render() {
    return (
      <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            href="#"
            className={`nav-link ${this.props.activeTab === 'item-one' ? 'active' : ''}`}
            id="item-one-tab"
            data-bs-toggle="tab"
            data-bs-target="#item-one"
            role="tab"
            aria-controls="item-one"
            aria-selected={this.props.activeTab === 'item-one' ? 'true' : 'false'}
          >
            <img src={require('..//assets/img/product/item-details.png')} alt="img" />
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#"
            className={`nav-link ${this.props.activeTab === 'item-two' ? '' : ''}`}
            id="item-two-tab"
            data-bs-toggle="tab"
            data-bs-target="#item-two"
            role="tab"
            aria-controls="item-two"
            aria-selected={this.props.activeTab === 'item-two' ? 'true' : 'false'}
          >
            <img src={require('..//assets/img/product/item-details.png')} alt="" />
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#"
            className={`nav-link ${this.props.activeTab === 'item-three' ? '' : ''}`}
            id="item-three-tab"
            data-bs-toggle="tab"
            data-bs-target="#item-three"
            role="tab"
            aria-controls="item-three"
            aria-selected={this.props.activeTab === 'item-three' ? 'true' : 'false'}
          >
            <img src={require('..//assets/img/product/item-details.png')} alt="" />
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#"
            className={`nav-link ${this.props.activeTab === 'item-four' ? '' : ''}`}
            id="item-four-tab"
            data-bs-toggle="tab"
            data-bs-target="#item-four"
            role="tab"
            aria-controls="item-four"
            aria-selected={this.props.activeTab === 'item-four' ? 'true' : 'false'}
          >
            <img src={require('..//assets/img/product/item-details.png')} alt="" />
          </a>
        </li>
      </ul>
      </>
    );
  }
}

export default ProductTabNav;
