import React, { Component } from 'react';
import RegistrationForm from '../components/user/RegistrationForm';
import '../components/assets/css/User.css';
import BannerLeaves from '../components/common/BannerLeaves';

class RegisterPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div className='register'>
        <div className='container-fluid ps-md-0 g-0'>
          <div className='row g-0'>
            <div className='col-md-8 col-lg-7'>
              <div className='registration d-flex align-items-center py-1'>
                <div className='container'>
                <div className='col-lg-4 col-md-2'>
                  <BannerLeaves className='col-lg-4 col-md-2 p-1' />
                </div>
                  <div className='row'>
                    <div className='col-md-9 col-lg-7 mx-auto'
                      style={{
                        visibility: 'visible',
                        animationDuration: '2s',
                        animationDelay: '0.2s',
                        animationName: 'bannerFadeInLeft',
                      }}>
                      <h4 className='h4 auth-heading mb-4'>Create an Account</h4>
                      <RegistrationForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-md-flex col-md-4 col-lg-5 bg-register-image'
                style={{
                  visibility: 'visible',
                  animationDuration: '2s',
                  animationDelay: '0.2s',
                  animationName: 'bannerFadeInLeft',
                }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
