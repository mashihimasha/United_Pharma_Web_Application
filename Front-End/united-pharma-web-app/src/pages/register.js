import React, { Component } from 'react';
import RegistrationForm from '../components/user/registrationForm';
import '../components/assets/css/user.css';
import BannerLeaves from '../components/common/bannerLeaves';

class RegisterPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div className="container-fluid ps-md-0 g-0">
        <div className="row g-0">
          <div className="col-md-8 col-lg-7">
            <div className="registration d-flex align-items-center py-5">
              <div className="container">
              <BannerLeaves className='col-lg-4 col-md-1 p-1' />
                <div className="row">
                  <div className="col-md-9 col-lg-7 mx-auto">
                    <h3 className="auth-heading mb-4">Create an Account</h3>
                    <RegistrationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex col-md-4 col-lg-5 bg-register-image"></div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
