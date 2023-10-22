import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import Axios from "axios";

function LoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false, // state for toggling password visibility
    error: null, // error state
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value, error: null });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setValues((prevState) => ({
      ...values,
      showPassword: !prevState.showPassword,
    }));
  };

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        email: values.email,
        password: values.password,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login', // replace with your server's URL
    }).then((res) => console.log(res.data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(); // Call the login function here
  };


  const { email, password, showPassword, error } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group mb-3 py-2'>
        <label htmlFor='email' className='small'>
          Email Address
        </label>
        <input
          className='form-control'
          type='email'
          id='email'
          name='email'
          placeholder=''
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='form-group mb-3 py-1'>
        <label htmlFor='password' className='small'>
          Enter Password
        </label>
        <input
          className='form-control'
          type={showPassword ? 'text' : 'password'} // Toggle input type
          id='password'
          placeholder=''
          name='password'
          value={password}
          onChange={handleInputChange}
          required
        />
        <div className='password-input'>
          <i
            className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
      </div>
      <div className='form-group mb-3'>
        <Link className='text-right small px-3' to='forgotPassword'>
          Forgot password?
        </Link>
      </div>

      <div className='d-grid mb-3 p-2'>
        {error && <p className='text-danger small'>{error}</p>} {/* Display error message */}

        <AuthButton className='py-2' buttonText='Sign In' onClick={handleSubmit} />

        <Link className='text-center small mt-3' to='/register'>
          Create Account?
        </Link>
        <div className='form-row d-flex mt-4 align-baseline'>
          <hr className='my-4 text-success col-4' />
          <p className='text-dark text-center small col-4'>Or continue with</p>
          <hr className='my-4 text-success col-4' />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
