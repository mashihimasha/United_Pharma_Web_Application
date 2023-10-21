import React, { Component } from 'react';
import '../assets/css/User.css';
import { Link } from 'react-router-dom';

class ForgotPasswordForm extends Component {
  render() {
    return (
      <div className="bg-gradient g-0">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h4 className="card-title text-center mb-3 fw-bold fs-4">Forgot your Password?</h4>
                <p className='mb-3'>Please enter your email address below to receive a password reset link.</p>
                <form>
                  <div className="form-group my-5 py-1">
                    <label htmlFor="email" className='small'>Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  </div>
                  
                  <div className="d-grid my-3">
                    <button type="button" className="btn btn-success btn-sm col-4 mx-auto text-white">Continue</button>
                  </div>
                  <div className='form-group mb-3 text-center'>
                    <Link className='small px-3' to='login'>Back to Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordForm;
