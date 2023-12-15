import React from 'react';
import ExpandableIcons from './ExpandableIcons';

const CardDetails = ({ title }) => {
  return (
    <div className="card mb-4 shadow border-0 col-md-3 h-25 rounded mx-1">
        <div className="card-body d-flex flex-row align-items-center">
            <div className='col-md-1'>
                <i className="fa fa-check-circle text-success mt-3" aria-hidden="true"></i>
            </div>      
            <div className='col-md-8'>
                <p className="card-title mx-3 mt-3">
                {title}       
                </p>
            </div>
            <div className='col-md-4'>
                <ExpandableIcons/>
            </div>
        </div>
    </div>
  );
};

export default CardDetails;
