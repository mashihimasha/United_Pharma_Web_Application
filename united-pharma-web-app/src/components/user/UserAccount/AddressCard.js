import React from 'react';

const AddressCard = ({ address }) => {
  const { name, street, city, state, zip, country } = address;

  return (
    <div className="card mb-4 shadow border-0">
      <div className="card-body">
        <h5 className="card-title my-4">
        <i className="fa fa-user-o mx-2" aria-hidden="true"></i>
        {name}</h5>
        <p className="card-text mx-2 text-black">
          <i className="fa fa-location-arrow" aria-hidden="true"></i>
          <span>{street}<br/></span> 
          <span className='mx-1'>{city}, {state}, {country}<br/></span>
          <span className='mx-1'>{zip}</span>
        </p>
        <div className='d-flex flex-row'>
          <button className="btn btn-white text-success">Edit</button>
          <button className="btn btn-white text-success">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
