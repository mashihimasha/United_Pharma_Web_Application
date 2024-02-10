import React, { useState } from 'react';
import OrderItemImage from './OrderItemImage';
import { Button } from 'react-bootstrap';

const OrderDetails = () => {
  const [values, setValues] = useState({
    id: '',
    date: '',
    product: '',
    quantity: '',
    price: '',
    total: '',
    status: '',
    orderType: '',
  });

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
    {
      id: 67890,
      date: 'February 15, 2023',
      product: 'Example Product 2',
      quantity: 1,
      price: 20.0,
      total: 20.0,
      status: 'In Transit',
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

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <div className="container mb-5">
      <h4 className="text-black my-4">Orders</h4>

      {currentOrders.map((order) => (
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
                <Button variant="danger" type="submit" className="my-3 mx-2 text-white btn-sm align-self-end">Cancel Order</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Pagination */}
      <nav aria-label="page navigation" className='pt-4'>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={goToFirstPage}>
              First
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={goToLastPage}>
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderDetails;
