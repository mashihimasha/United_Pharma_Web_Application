import React from 'react';
import AddressCard from './AddressCard';

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
    {
      id: 2,
      name: 'John Doe',
      street: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      country: 'Countryland',
    },
    {
      id: 3,
      name: 'John Doe',
      street: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      country: 'Countryland',
    },
    {
      id: 4,
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
          <h4 className="text-black my-4">Shipping Addresses</h4>
          <button className="btn btn-success my-3 text-white">
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Add New Address</button>
          <div className="row my-4">
            {addresses.map((address) => (
              <div key={address.id} className="col-md-4">
                <AddressCard address={address} />
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;
