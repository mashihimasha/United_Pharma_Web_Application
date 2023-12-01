import React from 'react';

const AddressCard = ({ address }) => {
  const { name, street, city, state, zip, country } = address;

  return (
    <div className="card mb-4 shadow border-0">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {street}, {city}, {state} {zip}, {country}
        </p>
        <div className='d-flex flex-row'>
          <button className="btn btn-success text-white mx-2">Edit Address</button>
          <button className="btn btn-danger mx-2">Delete Address</button>
        </div>
      </div>
    </div>
  );
};

const AddressList = ({ addresses }) => {
  return (
    <div className="container mt-4">
      {addresses.map((address, index) => (
        <AddressCard key={index} address={address} />
      ))}
    </div>
  );
};

export default AddressList;
