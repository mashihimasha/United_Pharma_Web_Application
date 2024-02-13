import React from 'react';

const AddressCard = ({ address, isSelected }) => {
  const { name, phone, street, city, state, zip, country } = address;

  return (
    <div className={`card mb-4 w-100 shadow ${isSelected ? 'border-success border-2' : 'border-0'}`}>
      <div className="card-body">
        <p className="align-self-start justify-self-end text-end fw-light"><small className={`${isSelected ? 'text-success ' : 'text-white'}`}>Default Address</small></p>
        <h6 className="card-title my-4 fw-bold">
          <span className="text-black"><i className="fa fa-user mx-2" aria-hidden="true"></i>{name},</span>
          <span className="text-black"><i className="fa fa-phone mx-2" aria-hidden="true"></i>{phone}</span>
        </h6>
        <p className="card-text mx-2 text-black lh-base">
          <p className="text-black"><i className="fa fa-location-arrow me-1" aria-hidden="true"></i>{street}</p>
          <p className='text-black ms-3'>{city}, {state}, {country}</p>
          <p className='text-black ms-3'>{zip}</p>
        </p>
        
      </div>
    </div>
  );
};

export default AddressCard;