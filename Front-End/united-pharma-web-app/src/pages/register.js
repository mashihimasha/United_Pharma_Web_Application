import React, { Component } from 'react';
import RegistrationForm from '../components/user/registrationForm';
import '../components/assets/css/user.css';
import BannerLeaves from '../components/common/bannerLeaves';
import Footer from '../components/user/stickyFooter';

class RegisterPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div className='register'>
        {/* Content */}
        <div className="content container-fluid ps-md-0 g-0">
          <div className="row g-0">
            <div className="col-md-8 col-lg-7">
              <div className="registration d-flex align-items-center py-5">
                <div className="container">
                <div className='col-lg-4 col-md-2'>
                  <BannerLeaves className='col-lg-4 col-md-2' />
                </div>
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

        {/* Sticky Footer */}
        <Footer/>
      </div>
    );
  }
}

export default RegisterPage;
