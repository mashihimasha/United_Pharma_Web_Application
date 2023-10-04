import React, { Component } from 'react';
import RegistrationForm from '../components/user/registrationForm';
import BannerLeaves from '../components/common/bannerLeaves';

class RegisterPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div>
        <div className="container-fluid ps-md-0 g-0">
          <div className="row g-0">
            <RegistrationForm /> {/* Render the LoginForm component */}
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
