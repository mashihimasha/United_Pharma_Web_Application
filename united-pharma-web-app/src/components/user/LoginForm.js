import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AuthButton from './AuthButton';

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

  const login = async () => {
    try {
      const response = await Axios.post('http://localhost:3000/login', {
        email: values.email,
        password: values.password,
      });

      if (response.data === 'User Authenticated') {
        // Successful login, redirect or perform action as needed
        console.log('Login successful');
      } else {
        setValues({ ...values, error: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!values.email) {
      setValues({ ...values, error: 'Email is required.' });
    } else if (!values.password) {
      setValues({ ...values, error: 'Password is required.' });
    } else {
      login(); // Call the login function here
    }
  };

  const { email, password, showPassword, error } = values;

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3 py-2">
          <label htmlFor="email" className="small">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder=""
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mb-3 py-1">
          <label htmlFor="password" className="small">
            Password
          </label>
          <input
            className="form-control"
            type={showPassword ? 'text' : 'password'} // Toggle input type
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
          <div className="password-input">
            <i
              className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
        </div>
        <div className="form-group mb-3">
          <Link className="text-right small px-3" to="forgotPassword">
            Forgot password?
          </Link>
        </div>

        <div className="d-grid mb-3 p-2">
          {error && <p className="text-danger small">{error}</p>} {/* Display error message */}

          <AuthButton className="py-2" buttonText="Sign In" onClick={handleSubmit} />

          <Link className="text-center small mt-3" to="/register">
            Create Account?
          </Link>
          <div className="form-row d-flex mt-4 align-baseline">
            <hr className="my-4 text-success col-4" />
            <p className="text-dark text-center small col-4">Or continue with</p>
            <hr className="my-4 text-success col-4" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
