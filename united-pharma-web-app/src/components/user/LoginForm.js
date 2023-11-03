import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import Axios from "axios";
import FormInput from './FormInput';

function LoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false, // state for toggling password visibility
  });

  const [submitErrors, setSubmitErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setValues((prevState) => ({
      ...values,
      showPassword: !prevState.showPassword,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Clear login errors
    setSubmitErrors({
      email: '',
      general: '',
    });
    if (isValidLogin()) {
      try {
        const response = await Axios.post('http://localhost:3000/login', {
          email: values.email,
          password: values.password,
        }, { withCredentials: true });
  
        if (response.data === 'User Authenticated') {
          // Successful login, redirect or perform action as needed
          console.log('Login successful');
        } else {
          updateSubmitErrors({ ...submitErrors, general: response.data });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  
  const updateSubmitErrors = (errors) => {
    setSubmitErrors(errors);
  };

  const isValidLogin = () => {
    let isValid = true;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(values.email)) {
      updateSubmitErrors((prevErrors) => ({ ...prevErrors, 
        email: 'You have entered an invalid e-mail address. Please try again.' }));
      isValid = false;
    }

    return isValid;
  };

  const { showPassword } = values;

  const inputFields = [
    {
      name: 'email',
      type: 'text',
      label: 'Enter Email',
      autoComplete: 'username',
      error: submitErrors.email,
    },
    {
      name: 'password',
      type: showPassword ? 'text' : 'password',
      label: 'Enter Password',
      autoComplete: 'current-password',
    },
  ];

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <FormInput
            key={index}
            name={field.name}
            type={field.type}
            label={field.label}
            value={values[field.name]}
            onChange={onChange}
            error={field.error}
            autoComplete={field.autoComplete}
          />
        ))}

        <div className='password-input'>
          <i
            className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        {submitErrors.general && (
            <p className="text-danger small px-2">{submitErrors.general}</p>
        )}
        <div className='d-grid mb-3 p-2'>

          <div className='form-group mb-3'>
            <Link className='text-right small' to='forgotPassword'>
              Forgot password?
            </Link>
          </div>

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
    </div>
  );
}

export default LoginForm;
