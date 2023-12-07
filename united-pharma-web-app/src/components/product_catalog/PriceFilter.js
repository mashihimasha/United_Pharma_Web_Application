import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [range, setRange] = useState([0, 10000]);

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleFilterClick = () => {
    // Add logic to handle the filter button click
    // You can use the 'range' state in your filter logic
  };

  return (
    <div className="price_filter">
      <Slider
        range
        min={0}
        max={10000}
        defaultValue={[0, 10000]}
        value={range}
        onChange={handleSliderChange}
      />

      <div className="price_slider_amount">
        <span>Price :</span>
        <input
          type="text"
          id="amount"
          name="price"
          placeholder="Add Your Price"
          value={`Rs.${range[0]} - Rs.${range[1]}`}
          readOnly
        />
        <input type="submit" class="btn" value='Filter' onClick={handleFilterClick}/>
          
        
      </div>
    </div>
  );
};

export default PriceFilter;
