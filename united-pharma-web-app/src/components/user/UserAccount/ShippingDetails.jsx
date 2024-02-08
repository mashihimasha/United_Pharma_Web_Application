import React, { useState } from 'react';
import AddressCard from './AddressCard';
import ShippingDetailsForm from './ShippingDetailsForm';

const ShippingDetails = () => {
  const [addresses, setShippingAddress] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '076XXXXXXX',
      street: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      country: 'Countryland',
      isSelected: true,
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '076XXXXXXX',
      street: '123 Main St',
      city: 'Cityville',
      state: 'Stateville',
      zip: '12345',
      country: 'Countryland',
      isSelected: false,
    },
  ]);

  const [showShippingAddressForm, setShowShippingAddressForm] = useState(false);

  const handleShowShippingAddressForm = () => {
    setShowShippingAddressForm(true);
  };

  const handleCloseShippingAddressForm = () => {
    setShowShippingAddressForm(false);
  };

  const addNewShippingAddress = (newShippingAddress) => {
    setShippingAddress([...addresses, newShippingAddress]);
    handleCloseShippingAddressForm();
  };

  return (
    <div className="container mt-4">
      {/* Address Preferences */}
      <div className="form-group">
        <h4 className="text-black my-4">Shipping Address</h4>
        
        <div className="d-flex flex-row flex-wrap">
          {addresses.map((address) => (
            <div key={address.id} className="col-md-4 mx-4">
              <AddressCard address={address} isSelected={address.isSelected} />
            </div>
          ))}
          <button
              className="btn btn-light text-black mb-4 pb-2 shadow border-0 col-md-4 mx-4"
              onClick={handleShowShippingAddressForm}
              >
              <i className="fa fa-plus-circle"></i> Add New Address
          </button>
        </div>
      </div>
      
      {/* Modal for adding a new card */}
      <ShippingDetailsForm
        showModal={showShippingAddressForm}
        handleClose={handleCloseShippingAddressForm}
        initialValues={{
          receiverName: '',
          addressLine1: '',
          city: '',
          province: '',
          zipCode: '',
        }}
        onSubmit={addNewShippingAddress}
      />
    </div>
  );
};

export default ShippingDetails;
