import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import '../assets/css/catalog.css';


class PriceFilter extends Component {
  render() {
    return (
      <>
      
      <div className="price_filter">
        <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
          <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: '26.3158%', width: '42.1053%' }}></div>
          <span className="" tabIndex="0" style={{ left: '26.3158%' }}></span>
          <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: '68.4211%' }}></span>
        </div>
        <div className="price_slider_amount">
          <span>Price :</span>
          <input type="text" id="amount" name="price" placeholder="Add Your Price" />
          <input type="submit" className="btn" value="Filter" />
        </div>
      </div>
      </>
    );
  }
}

export default PriceFilter;
