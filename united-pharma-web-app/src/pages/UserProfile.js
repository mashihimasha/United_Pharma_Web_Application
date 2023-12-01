import React, { useState } from 'react';
import '../components/assets/css/User.css';
import ProfileForm from '../components/user/ProfileForm';
import CardDetailsForm from '../components/user/CardDetailsForm';
import Sidebar from '../components/user/UserAccount/Sidebar';
import OrderDetails from '../components/user/UserAccount/OrderDetails';
import ShippingDetails from '../components/user/UserAccount/ShippingDetails';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
    <div className={`container-fluid tab-pane fade w-50 ${activeTab === 'payment' ? 'show active' : ''}`} id="payment">
      {/* ... Payment Section JSX ... */}
      <CardDetailsForm />
    </div>
  );
};

const ShippingAddressSection = ({ activeTab }) => {
  if (activeTab !== 'shipping') return null;

  return (
    <div className={`container-fluid tab-pane fade ${activeTab === 'shipping' ? 'show active' : ''}`} id="payment">
      {/* ... Payment Section JSX ... */}
      <ShippingDetails/>
    </div>
  );
};

export default UserProfile;
