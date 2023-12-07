import React from 'react';

class RelatedProducts extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="related-products-wrap">
          <h2 className="title">Related Products</h2>
          <div className="row related-product-active slick-initialized slick-slider slick-dotted">
            <button type="button" className="slick-prev slick-arrow" >
              <i className="fa fa-arrow-left"></i>
            </button>

            <div className="slick-list draggable">
              <div className="slick-track"
                style={{ opacity: 1, width: '4400px' }}>
                <div className="col-xl-3 slick-slide slick-cloned"
                  style={{ width: '400px' }}
                  tabIndex="-1"
                  role="tabpanel"
                  id=""
                  aria-describedby="slick-slide-control04"
                  data-slick-index="-1"
                  aria-hidden="true">
                  <div className="home-shop-item">
                    <div className="home-shop-thumb">
                      <a href="shop-details.html" tabIndex="-1">
                        <img src={require("../assets/img/product/p1.jpg")} alt="img" />
                      </a>
                      <div className="shop-thumb-shape blue"></div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="slick-next slick-arrow">
              <i className="flaticon-right-arrow"></i>
            </button>

            <ul className="slick-dots" role="tablist">
              <li className="" role="presentation">
                <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabIndex="-1">
                  1
                </button>
              </li>
              {/* Include other slick dots as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
