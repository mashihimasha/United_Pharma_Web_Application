import React, { Component } from 'react';
import '../components/assets/css/user.css';
import BannerLeaves from '../components/common/BannerLeaves';
import Footer from '../components/user/Footer';
import LoginForm from '../components/user/LoginForm';

class LoginPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div className='login'>
        {/* Content */}
        <div className="content container-fluid ps-md-0 g-0">
          <div className="row g-0">
            <div className="col-md-8 col-lg-7">
              <div className="registration d-flex align-items-center py-5">
                <div className="container">
                <BannerLeaves className='col-lg-4 col-md-1 p-1' />
                  <div className="row">
                    <div className="col-md-9 col-lg-7 mx-auto">
                      <h3 className="auth-heading mb-4 py-3">Welcome Back!</h3>
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-md-flex col-md-4 col-lg-5 bg-login-image"></div>
          </div>
        </div>

        {/* Sticky Footer */}
        <Footer />

      </div>
    );
  }
}

export default LoginPage;
