import React from 'react';
import OrderItemImage from './OrderItemImage';

const OrderDetails = () => {
  const orders = [
    {
      id: 12345,
      date: 'January 1, 2023',
      product: 'Example Product 1',
      quantity: 2,
      price: 10.0,
      total: 20.0,
      status: 'Shipped',
    },
    {
      id: 67890,
      date: 'February 15, 2023',
      product: 'Example Product 2',
      quantity: 1,
      price: 20.0,
      total: 20.0,
      status: 'In Transit',
    },
  ];

  return (
    <div className="container mb-5">
      <h4 className="text-black my-4">Orders</h4>

      {orders.map((order) => (
        <div key={order.id} className="order-content card mb-4 shadow border-0">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className='w-100'>
              <h5 className="card-title order-item-header">
                <ul className="list-group list-group-flush d-flex flex-row justify-content-between">
                  <li className="order-status list-group-item text-success">{order.status}</li>
                  <div className='order-item-details d-flex flex-column small'>
                    <p className="text-muted small m-0">Order Date: {order.date}</p>
                    <p className="text-muted small m-0">Order ID: #{order.id}</p>
                  </div>
                </ul>
                <hr />
              </h5>
              <div className='d-flex flex-row justify-content-around flex-wrap'>
                <OrderItemImage imageUrl="https://via.placeholder.com/120x120" />
                <ul className="order-item-content list-group list-group-flush align-self-center">
                  <li className="list-group-item">{order.product}</li>
                  <li className="list-group-item small">LKR {order.price.toFixed(2)}<span className='small text-muted'> x {order.quantity}</span></li>
                </ul>
                <h5 className='card-text align-self-center'>Total: {order.total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Pagination */}
      <nav aria-label="page navigation" className='pt-4'>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#2">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#3">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#next">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderDetails;
