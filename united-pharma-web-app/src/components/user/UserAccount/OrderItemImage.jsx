import React from 'react';

const OrderItemImage = ({ imageUrl }) => {
  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: '120px',
    height: '120px',
    border: '2px solid #ddd',
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="order-item-image" style={divStyle}>
    </div>
  );
};

export default OrderItemImage;
