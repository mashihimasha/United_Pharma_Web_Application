import React from 'react';
import AddressList from '../UserAccount/AddressList';

const ShippingDetails = () => {
  const addresses = [
    {
      id: 1,
      name: 'John Doe',
      street: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      country: 'Countryland',
    },
  ];

  return (
    <div className="container mt-4">

      <form>
        {/* Address Preferences */}
        <div className="form-group">
          <h3 className="text-black">Shipping Addresses</h3>
          <AddressList addresses={addresses} />
          <button className="btn btn-success m-3 text-white">Add New Address</button>
        </div>

      </form>
    </div>
  );
};

export default ShippingDetails;
