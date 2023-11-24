import React from 'react';

const OrderDetails = () => {
  const orders = [
    {
      id: 12345,
      date: 'January 1, 2023',
      product: 'Example Product 1',
      quantity: 2,
      total: 50.0,
      status: 'Shipped',
    },
    {
      id: 67890,
      date: 'February 15, 2023',
      product: 'Example Product 2',
      quantity: 1,
      total: 30.0,
      status: 'In Transit',
    },
  ];

  return (
    <div className="container mb-5">
      <h2 className="mb-4 text-dark">My Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="card mb-4 shadow">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">Order #{order.id}</h5>
              <p className="card-text">Date: {order.date}</p>
              <p className="card-text">Status: {order.status}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Product: {order.product}</li>
              <li className="list-group-item">Quantity: {order.quantity}</li>
              <li className="list-group-item">Total: ${order.total.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
