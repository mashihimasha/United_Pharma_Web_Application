import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Sidebars.css';

const Sidebar = ({ activeTab, onTabChange }) => {
  const [userRole,setUserRole]=useState('administrator');
  const isRestrictedRole = ['wholesale', 'administrator', 'pharmacist'].includes(userRole);

  const handleSetUserRole = (newRole) => {
    setUserRole(newRole);
  };
  
  return (
    <div id="sidebar-wrapper" className='d-flex flex-column flex-shrink-0 border-right m-4'>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-left">
        {/*collapse if mobile*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="sidebarMenu">
          <ul className="navbar-nav nav-pills tab mr-auto mt-2 mt-lg-0 flex-column mb-auto d-flex justify-content-center list-group list-group-flush w-75">
            {/*Profile section*/}
            <li className={`nav-item  border-0 list-group-item list-group-item-action pl-6 ${activeTab === 'profile' ? 'active' : ''}`}>
              <Link to="#profile" className="nav-link link-dark" onClick={() => onTabChange('profile')}>
                <i className="fa fa-user me-2"></i>Profile
              </Link>
            </li>
            {!isRestrictedRole && (
              <>
                {/*Orders section*/}
                <li className={`nav-item border-0  list-group-item list-group-item-action pl-6 ${activeTab === 'orders' ? 'active' : ''}`}>
                  <Link to="#orders" className="nav-link link-dark" onClick={() => onTabChange('orders')}>
                    <i className="fa fa-shopping-cart me-2"></i>Orders
                  </Link>
                </li>
                {/*Payment section*/}
                <li className={`nav-item  border-0 list-group-item list-group-item-action pl-6 ${activeTab === 'payment' ? 'active' : ''}`}>
                  <Link to="#payment" className="nav-link link-dark" onClick={() => onTabChange('payment')}>
                    <i className="fa fa-credit-card me-2"></i>Payment
                  </Link>
                </li>
                {/*Shipping Address section*/}
                <li className={`nav-item  border-0 list-group-item list-group-item-action pl-6 ${activeTab === 'shipping' ? 'active' : ''}`}>
                  <Link to="#shipping" className="nav-link link-dark" onClick={() => onTabChange('shipping')}>
                    <i className="fa fa-credit-card me-2"></i>Shipping Address
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;