import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ShoppingItem from './component/ShoppingItem';
import {Button} from 'react-bootstrap';
import Checkout from './component/Checkout';
//import { BrowserRouter as Routes,Route, Link } from 'react-router-dom';
//import Checkout from "./component/Checkout";

   



function App() {
  return (
    <div className="App">
      
      <div className="cart-body">
        <div className="cart-main">
          <div className="cart-header-title"> &nbsp;&nbsp; Shopping Cart </div>
            <div className="cart-list">
              <div className="infinite-scroll-component__outerdiv">
                <div className="infinite-scroll-component comet-v2-infinite-scroll" style={{ height: 'auto', overflow: 'hidden auto' }}>
                  {/* ... (Continue converting the rest of the code) */}
                </div>
              </div>
            </div>
          </div>
          <div className="parent-wrapper clearfix cart-text-parent">
            <div className="parent-wrapper clearfix cart-text-parent">
              <br/> 
            <span className="need-help">Need Help? Call +94 764477888 / +94 764477999</span>
              
              <div className='NumberOfItems'> 
                <br/>1 item(s) added to your shopping cart  
              </div>
            </div>
          </div>
        </div>

      {/*<thead>
        <tr className="text-uppercase heading">
          <th className="item text-left" scope="col" colSpan="2">
            <small className="help"> </small>
          </th>
          <th className="price" scope="col" size="3" ><span>Select Item</span></th>
          <th className="price" scope="col"><span>Discription</span></th>
          <th className="price" scope="col"><span>Price</span></th>
          <th className="qty" scope="col"><span>Qty</span></th>
          <th className="subtotal" scope="col"><span>Subtotal</span></th>
        </tr>
      </thead>*/}
      
      <br/>
      <ShoppingItem shopName={'Shop Name'}/>
      {/* Additional cart-side code */}

      <div className="promo block discount" id="block-discount" data-collapsible="true" role="tab" aria-selected="false" aria-expanded="false" tabIndex="0">
      <form id="discount-coupon-form" action="https://www.healthguard.lk/checkout/cart/couponPost/" method="post">
        <table>
          <tbody>
            <tr>
              <th className="discount-label">
                Apply Discount Code
              </th>
            </tr>
            <tr>
              <td className="discount-input content" data-role="content" aria-labelledby="block-discount-heading">
                <div className="fieldset coupon">
                  <input type="hidden" name="remove" id="remove-coupon" value="0" />
                  <input
                    type="text"
                    className="form-control input-text"
                    id="coupon_code"
                    name="coupon_code"
                    value=""
                    placeholder="Enter discount code"
                  />
                </div>
              </td>
              <td>
                <Button> Apply Discount </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>

    <br/>
    <br/>
    <div className="cart-summary">
                <strong className="summary title">Summary</strong>
                <div id="cart-totals" className="cart-totals" data-bind="scope:'block-totals'">
                    <div className="table-wrapper no-styles" data-bind="blockLoader: isLoading">
                        <table className="table price-table data table totals">
                            <tbody>
                                <tr className="totals sub">
                                    <th data-bind="i18n: title" className="mark" scope="row">Subtotal</th>
                                    <td className="amount">
                                        <span className="price" data-bind="text: getValue()" data-th="Subtotal">LKR0.50</span>
                                    </td>
                                </tr>
                                <tr className="totals-tax">
                                    <th data-bind="text: title" className="mark" colSpan="1" scope="row">Tax</th>
                                    <td data-bind="attr: {'data-th': title}" className="amount" data-th="Tax">
                                        <span className="price" data-bind="text: getValue()">LKR0.00</span>
                                    </td>
                                </tr>
                                <tr className="grand totals">
                                    <th className="mark" scope="row">
                                        <strong data-bind="i18n: title">Order Total</strong>
                                    </th>
                                    <td data-bind="attr: {'data-th': title}" className="amount" data-th="Order Total">
                                        <strong><span className="price" data-bind="text: getValue()">LKR0.50</span></strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

               
                <div className="btn-parent" md={{ span: 4, offset: 4}} >
                  
                  <Button className="align-self-center mx-auto" type="button" class="btn btn-danger">
                      Proceed to Checkout 
                    {/*<Routes>
                        <div>
                          <nav>
                            <ul>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                            </ul>
                          </nav>
                          
                          <Route path="/checkout" element={Checkout} />
                        </div>
    </Routes>*/}
                  </Button>                    
                  <div className="ext-link-parent">
                    <a href="/" className="ext-link">Continue Shopping </a>
                  </div>
                </div>
                            
            </div>
      
      <div className="cart-container-payment-methods">
      <div className="we-accept">
          <table style={{ width: 'auto' }}>
              <tbody>
                  <tr>
                      <th>We Accept:</th>
                      <td style={{ paddingLeft: '10px' }}>
                          <img className="img-fluidalt" src="https://www.healthguard.lk/pub/media/payment/visa.png" alt="Visa" />
                      </td>
                      <td style={{ paddingLeft: '10px' }}>
                          <img className="img-fluidmaster" src="https://www.healthguard.lk/pub/media/payment/mastercard.png" alt="Mastercard" />
                      </td>
                     
                  </tr>
              </tbody>
          </table>
      </div>
      </div>
      


      <Checkout checkName = {'checkout'}></Checkout>



      
    </div>

  );
}

export default App;






