import React, { Component } from 'react';
import '../assets/css/User.css';
import AuthButton from './AuthButton';

class ProfileForm extends Component {
  render() {
    return (
      <div className='container-fluid tab-pane active' id='profile'>
        <div className='container-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9 col-lg-8 mx-auto pt-3'>
                <form method='POST'>
                  <h6 className='dropdown-header d-flex align-items-center'>
                    <div id='profile-container'>
                      <img id='profileImage' src='assets/img/dp/solar.jpg' alt='Profile' />
                    </div>
                    <input id='imageUpload' type='file' name='profile_photo' placeholder='Photo' required='' capture='' />
                    <div className='dropdown-user-details gradient-border'>
                      <h4 className='text-black ml-2'>Welcome Back !</h4>
                      <div className='dropdown-user-details-name ml-3 text-black'>Solar Luna</div>
                      <div className='dropdown-user-details-email ml-3'>sluna@gmail.com</div>
                    </div>
                  </h6>
                  <div className='form-label-group mt-3'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' id='fname' name='fname' className='form-control' placeholder='First Name' value='Solar' required='' />
                  </div>

                  <div className='form-label-group mt-3'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' id='lname' name='lname' className='form-control' placeholder='Last Name' value='Luna' required='' />
                  </div>

                  <div className='form-label-group mt-3'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' id='email' name='email' className='form-control' placeholder='E-mail' value='sluna@gmail' required='' />
                  </div>
                  <AuthButton className='' buttonText='Update'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileForm;
