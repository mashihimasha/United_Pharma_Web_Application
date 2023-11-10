import React, { Component } from 'react';
import '../components/assets/css/User.css';
import BannerLeaves from '../components/common/BannerLeaves';
import LoginForm from '../components/user/LoginForm';
//import AuthButton from '../components/user/AuthButton';

class LoginPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div className='login'>
        {/* Content */}
        <div className='container-fluid ps-md-0 g-0'>
          <div className='row g-0'>
            <div className='col-md-8 col-lg-7'>
              <div className='registration d-flex align-items-center py-1'>
                <div className='container'>
                  <BannerLeaves className='col-lg-4 col-md-1 p-1' />
                  <div className='row'>
                    <div className='col-md-9 col-lg-7 mx-auto'
                      style={{
                        visibility: 'visible',
                        animationDuration: '2s',
                        animationDelay: '0.2s',
                        animationName: 'bannerFadeInLeft',
                        }}>
                      <h4 className='h4 auth-heading mb-4 py-3'>Sign in to your account</h4>
                      {/* <AuthButton buttonText='Google Login' className=''/> */}
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-md-flex col-md-4 col-lg-5 bg-login-image'></div>
          </div>
        </div>

      </div>
    );
  }
}

export default LoginPage;
