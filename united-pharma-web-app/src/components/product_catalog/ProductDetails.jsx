import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'item-one', // Set the initial active tab
    };
  }

  handleTabClick = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane ${activeTab === 'item-one' ? 'show active' : ''}`}
          id="item-one"
          role="tabpanel"
          aria-labelledby="item-one-tab"
        >
          <div className="inner-shop-details-img">
            <img src={require('..//assets/img/product/item-details.png')} alt="img" />
          </div>
        </div>
        <div
          className={`tab-pane ${activeTab === 'item-two' ? 'show active' : ''}`}
          id="item-two"
          role="tabpanel"
          aria-labelledby="item-two-tab"
        >
          <div className="inner-shop-details-img">
            <img src={require('..//assets/img/product/item-details.png')} alt="img" />
          </div>
        </div>
        <div
          className={`tab-pane ${activeTab === 'item-three' ? 'show active' : ''}`}
          id="item-three"
          role="tabpanel"
          aria-labelledby="item-three-tab"
        >
          <div className="inner-shop-details-img">
            <img src={require('..//assets/img/product/item-details.png')} alt="img" />
          </div>
        </div>
        <div
          className={`tab-pane ${activeTab === 'item-four' ? 'show active' : ''}`}
          id="item-four"
          role="tabpanel"
          aria-labelledby="item-four-tab"
        >
          <div className="inner-shop-details-img">
            <img src={require('..//assets/img/product/item-details.png')} alt="img" />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default ProductDetails;
