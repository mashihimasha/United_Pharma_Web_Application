import React from 'react';
import { useState } from 'react';
import '../components/assets/css/User.css';
import ProfileForm from '../components/user/ProfileForm';
import CardDetailsForm from '../components/user/CardDetailsForm';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="wrapper">
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-black bg-black justify-content-center">
          <ul className="nav nav-pills tab mr-auto mt-2 mt-lg-0">
            <TabLink
              label="Profile"
              tab="profile"
              activeTab={activeTab}
              onClick={handleTabChange}
            />
            <TabLink
              label="Orders"
              tab="orders"
              activeTab={activeTab}
              onClick={handleTabChange}
            />
            <TabLink
              label="Payment"
              tab="payment"
              activeTab={activeTab}
              onClick={handleTabChange}
            />
            <TabLink
              label="Preferences"
              tab="preferences"
              activeTab={activeTab}
              onClick={handleTabChange}
            />
          </ul>
        </nav>
        <div className="tab-content py-3 mb-5">
          {/* Profile Section */}
          <ProfileSection activeTab={activeTab} />
          {/* Orders Section */}
          <OrdersSection activeTab={activeTab} />
          {/* Payment Section */}
          <PaymentSection activeTab={activeTab} />
          {/* Preferences Section */}
          <PreferencesSection activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

const TabLink = ({ label, tab, activeTab, onClick }) => {
  const isActive = activeTab === tab;

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <a
        className={`nav-link text-light ${isActive ? 'active show' : ''}`}
        href={`#${tab}`}
        onClick={() => onClick(tab)}
      >
        {label} {isActive && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

const ProfileSection = ({ activeTab }) => {
  if (activeTab !== 'profile') return null;

  return (
    <div className={`container-fluid tab-pane ${activeTab === 'profile' ? 'active show' : ''}`} id="profile">
      {/* ... Profile Section JSX ... */}
      <ProfileForm />
    </div>
  );
};

const OrdersSection = ({ activeTab }) => {
  if (activeTab !== 'orders') return null;

  return (
    <div className={`container-fluid tab-pane fade ${activeTab === 'orders' ? 'show active' : ''}`} id="orders">
      {/* ... Orders Section JSX ... */}
    </div>
  );
};

const PaymentSection = ({ activeTab }) => {
  if (activeTab !== 'payment') return null;

  return (
    <div className={`container-fluid tab-pane fade ${activeTab === 'payment' ? 'show active' : ''}`} id="payment">
      {/* ... Payment Section JSX ... */}
      <CardDetailsForm />
    </div>
  );
};

const PreferencesSection = ({ activeTab }) => {
  if (activeTab !== 'preferences') return null;

  return (
    <div className={`container-fluid tab-pane fade ${activeTab === 'preferences' ? 'show active' : ''}`} id="preferences">
      {/* ... Preferences Section JSX ... */}
    </div>
  );
};

export default UserProfile;
