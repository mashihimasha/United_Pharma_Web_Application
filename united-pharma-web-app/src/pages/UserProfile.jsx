import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/user/config/AuthContext';
import '../components/assets/css/User.css';
import ProfileForm from '../components/user/UserAccount/ProfileForm';
import Sidebar from '../components/user/UserAccount/Sidebar';
import OrderDetails from '../components/user/UserAccount/OrderDetails';
import ShippingDetails from '../components/user/UserAccount/ShippingDetails';
import Payments from '../components/user/UserAccount/Payments';

const UserProfile = () => {
  const { state } = useAuth();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Redirect to login page if not logged in
  const isLoggedOn= () => {  
    if (!state.user) {
      navigate('/login'); 
      return null;
    }
  }

  useEffect(() => {
    isLoggedOn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="wrapper" className="d-flex">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="tab-content p-3 mb-5 mx-auto w-100">
        {/* Profile Section */}
        <ProfileSection activeTab={activeTab} />
        {/* Orders Section */}
        <OrdersSection activeTab={activeTab} />
        {/* Payment Section */}
        <PaymentSection activeTab={activeTab} />
        {/* Shipping Address Section */}
        <ShippingAddressSection activeTab={activeTab} />
      </div>
    </div>
  );
};

const ProfileSection = ({ activeTab }) => {
  if (activeTab !== 'profile') return null;

  return (
    <div className={`container-fluid tab-pane w-50 ${activeTab === 'profile' ? 'active show' : ''}`} id="profile">
      {/* ... Profile Section JSX ... */}
      <ProfileForm />
    </div>
  );
};

const OrdersSection = ({ activeTab }) => {
  if (activeTab !== 'orders') return null;

  return (
    <div className={`container-fluid tab-pane fade w-100 ${activeTab === 'orders' ? 'show active' : ''}`} id="orders">
      {/* ... Orders Section JSX ... */}
      <OrderDetails/>
    </div>
  );
};

const PaymentSection = ({ activeTab }) => {
  if (activeTab !== 'payment') return null;

  return (
    <div className={`container-fluid tab-pane fade w-100 ${activeTab === 'payment' ? 'show active' : ''}`} id="payment">
      {/* ... Payment Section JSX ... */}
      <Payments />
    </div>
  );
};

const ShippingAddressSection = ({ activeTab }) => {
  if (activeTab !== 'shipping') return null;

  return (
    <div className={`container-fluid tab-pane fade w-100 ${activeTab === 'shipping' ? 'show active' : ''}`} id="payment">
      {/* ... Payment Section JSX ... */}
      <ShippingDetails/>
    </div>
  );
};

export default UserProfile;
