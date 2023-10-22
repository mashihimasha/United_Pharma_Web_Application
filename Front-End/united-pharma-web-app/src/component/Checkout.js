import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function Checkout() {
  return (
    <div id="root">
      <div id="container" className="">
        <div className="placeorder-wrap large" style={{ paddingBottom: '0px' }}>
          <div id="placeorder_wrap__inner">
            <div className="pl-place-order-container large">
              <div className="pl-main-container large">
                <div className="pl-block-container large">
                  <div className="pl-address-item-container  large" data-pl="pl-address">
                    <div className="pl-address-item-title large" data-pl="pl-address-title">
                       Address <br/>
                    </div>
                    <div className="pl-address-item-content-wrap large" data-pl="pl-address-detail">
                    <br/>
                      <div className="telephoneNumber large">
                         +94 715900395 
                      </div>
                      <div className="name large">
                        Hirushi Nisansala
                      </div>
                      <div className="addressLine1 large">
                        44/8, / old galaha road, sarasavi uyana, peradeniya
                      </div>
                      <div className="addressLine2 large">
                        Kandy, Central, Sri Lanka, 20400
                      </div>
                      <span className="pl-address-item__arrrow large" data-pl="pl-address-change">
                        <Button > Change </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="placeorder-page-payment-container">
                  <div id="placeorder-page-payment-container">
                    {/* Payment methods go here */}
                  </div>
                </div>
              </div>

              <br/>
              <br/>
              <div className="pl-side-container large">
                <div className="pl-block-container large">
                  <div className="pl-summary-container" data-pl="pl-summary-container">
                    <div className="pl-summary__items">
                      <div className="pl-summary__item-pc large">
                        <div className="pl-summary__item-title-pc">
                          <div className="pl-summary__item-title__main" data-pl="pl-summary-title">
                            <span style={{ color: 'rgb(34, 34, 34)', fontSize: '14px', fontWeight: 1000 }}>
                              Summary
                            </span>
                          </div>
                        </div>
                        <div className="pl-summary__item-content-pc" data-pl="pl-summary-content">
                          <div style={{ color: 'rgb(34, 34, 34)', fontSize: '14px', fontWeight: 700 }}>
                            {/* Summary content goes here */}
                          </div>
                        </div>
                      </div>
                      <div className="pl-summary__item-pc large">
                        <div className="pl-summary__item-title-pc">
                          <div className="pl-summary__item-title__main" data-pl="pl-summary-title">
                            <span style={{ color: 'rgb(34, 34, 34)' }}>Total item costs</span>
                          </div>
                        </div>
                        <div className="pl-summary__item-content-pc" data-pl="pl-summary-content">
                          <div style={{ color: 'rgb(34, 34, 34' }}>Rs 10.00</div>
                        </div>
                      </div>
                      <div className="pl-summary__item-pc large">
                        <div className="pl-summary__item-title-pc">
                          <div className="pl-summary__item-title__main" data-pl="pl-summary-title">
                            <span style={{ color: 'rgb(34, 34, 34)' }}>Promo code</span>
                          </div>
                        </div>
                        <div className="pl-summary__item-content-pc" data-pl="pl-summary-content">
                          <div style={{ color: 'rgb(34, 34, 34' }}>Enter code here</div>
                        </div>
                        <span className="pl-summary__item-arrow-pc">
                          <span className="comet-icon comet-icon-arrowdown">
                            {/* Down arrow icon */}
                          </span>
                        </span>
                      </div>
                      <div className="pl-summary__item-pc large">
                        <div className="pl-summary__item-title-pc">
                          <div className="pl-summary__item-title__main" data-pl="pl-summary-title">
                            <span style={{ color: 'rgb(34, 34, 34)' }}>Total shipping</span>
                          </div>
                        </div>
                        <div className="pl-summary__item-content-pc" data-pl="pl-summary-content">
                          <div style={{ color: 'rgb(34, 34, 34' }}>Free</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-wrap-container large">
                    <div className="pl-order-toal-container">
                      <div className="pl-order-toal-container__inner large">
                        <div className="pl-order-toal-container__item">
                          <span className="pl-order-toal-container__item-title-wrap" style={{ color: 'rgb(34, 34, 34)', fontSize: '15px', fontWeight: 700 }}>
                            Total
                          </span>
                          <span className="pl-order-toal-container__item-content" style={{ color: 'rgb(34, 34, 34)', fontSize: '15px', fontWeight: 700 }}>
                            <div className="es--wrap--1Hlfkoj notranslate" style={{ color: 'rgb(34, 34, 34)', fontSize: '20px' }}>
                              <span className="es--char--RqgnKC9">US $</span>
                              <span className="es--space2--2e8NoKU"></span>
                              <span className="es--char--RqgnKC9">1</span>
                              <span className="es--char--RqgnKC9">.</span>
                              <span className="es--char--RqgnKC9">9</span>
                              <span className="es--char--RqgnKC9">9</span>
                            </div>
                          </span>
                        </div>
                        <div className="pl-order-toal-container__btn-box">
                          
                            <Button>Place order</Button>
                          
                        </div>
                      </div>
                    </div>
                    <div className="pl-text-container-pc">
                      Upon clicking 'Place Order', I confirm I have read and acknowledged{' '}
                      
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
