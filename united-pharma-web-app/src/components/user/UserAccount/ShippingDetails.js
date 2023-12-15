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
  ];

  return (
    <div className="container mt-4">
      <form>
        {/* Address Preferences */}
        <div className="form-group">
          <h4 className="text-black my-4">Shipping Addresses</h4>
          
          <div className="d-flex flex-row flex-wrap">
            {addresses.map((address) => (
              <div key={address.id} className="col-md-4 mx-4">
                <AddressCard address={address} />
              </div>
            ))}
            <button
                className="btn btn-light text-black mb-4 shadow border-0 col-md-4 mx-4"
                >
                <i className="fa fa-plus-circle"></i> Add New Address
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;
