import React from 'react';
import ProductItem from './ProductItem';

const RelatedProducts = () => {
  return (
    <>
    <div className="related-products-area pb-120">
      <div className="container">
        <div className="related-products-wrap">
          <h2 className="title">Related Products</h2>
          <div className="row related-product-active slick-initialized slick-slider slick-dotted">
            <button type="button" className="slick-prev slick-arrow">
              <i className="fa fa-arrow-left"></i>
            </button>

            {/* Render your product items here */}
            {/* Example Product Item */}
            <div className="col-xl-3 slick-slide slick-current slick-active" style={{ width: '400px' }} tabIndex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="false">
              <ProductItem/>
            </div>
            <div className="col-xl-3 slick-slide slick-current slick-active" style={{ width: '400px' }} tabIndex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="false">
              <ProductItem/>
            </div>
            <div className="col-xl-3 slick-slide slick-current slick-active" style={{ width: '400px' }} tabIndex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="false">
              <ProductItem/>
            </div>
            {/* End Example Product Item */}

            <button type="button" className="slick-next slick-arrow">
              <i className="fa fa-arrow-right"></i>
            </button>
            <ul className="slick-dots" role="tablist">
              <li className="slick-active" role="presentation">
                <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabIndex="0" aria-selected="true">1</button>
              </li>
              {/* Add dots for each product */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RelatedProducts;