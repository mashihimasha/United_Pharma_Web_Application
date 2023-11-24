import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if not already installed
import '../../assets/css/Sidebars.css'

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div id="sidebar-wrapper" className='d-flex flex-column flex-shrink-0 p-3 bg-light border-right'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-left">
        <ul className="nav nav-pills tab mr-auto mt-2 mt-lg-0 flex-column mb-auto list-group list-group-flush w-100">
          <li className={`nav-item list-group-item list-group-item-action pl-6 ${activeTab === 'profile' ? 'active' : ''}`}>
            <Link to="#profile" className="nav-link link-dark" onClick={() => onTabChange('profile')}>
              <i className="fa fa-user me-2"></i>Profile
            </Link>
          </li>
          <li className={`nav-item list-group-item list-group-item-action pl-6 ${activeTab === 'orders' ? 'active' : ''}`}>
            <Link to="#orders" className="nav-link link-dark" onClick={() => onTabChange('orders')}>
              <i className="fa fa-shopping-cart me-2"></i>Orders
            </Link>
          </li>
          <li className={`nav-item list-group-item list-group-item-action pl-6 ${activeTab === 'payment' ? 'active' : ''}`}>
            <Link to="#payment" className="nav-link link-dark" onClick={() => onTabChange('payment')}>
              <i className="fa fa-credit-card me-2"></i>Payment
            </Link>
          </li>
          <li className={`nav-item list-group-item list-group-item-action pl-6 ${activeTab === 'preferences' ? 'active' : ''}`}>
            <Link to="#preferences" className="nav-link link-dark" onClick={() => onTabChange('preferences')}>
              <i className="fa fa-cogs me-2"></i>Preferences
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Sidebar;
