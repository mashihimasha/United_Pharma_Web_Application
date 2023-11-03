import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationSuccess({ showSuccessModal }) {
  // Use showSuccessModal to determine whether to display the success component.

  return (
    <div className='registration_success'>
    {showSuccessModal && (
      <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div className="modal-content rounded-5">
             
            <div className="modal-body text-center">
                <i className="fa fa-check-circle text-success fa-3x"></i>
                <p className='text-success py-2'>Registration Successful!</p>
                <Link className="btn btn-success text-white rounded-pill" to='/'>Go to Login</Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

export default RegistrationSuccess;
