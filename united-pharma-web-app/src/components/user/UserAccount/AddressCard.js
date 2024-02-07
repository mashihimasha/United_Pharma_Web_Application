import React from 'react';

const AddressCard = ({ address }) => {
  const { name,phone, street, city, state, zip, country } = address;

  return (
    <div className="card mb-4 shadow border-0">
      <div className="card-body">
        <h6 className="card-title my-4 fw-bold">
          <span className="text-black"><i className="fa fa-user mx-2" aria-hidden="true"></i>{name},</span>
          <span className="text-black"><i className="fa fa-phone me-2" aria-hidden="true"></i>{phone}</span> 
        </h6>
        <p className="card-text mx-2 text-black lh-base">         
          <p className="text-black"><i className="fa fa-location-arrow me-1" aria-hidden="true"></i>{street}</p> 
          <p className='text-black ms-3'>{city}, {state}, {country}</p>
          <p className='text-black ms-3'>{zip}</p>
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
