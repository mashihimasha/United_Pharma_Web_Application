import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AuthButton from './AuthButton';

function RegistrationForm() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value, error: null });
  };

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        email: values.email,
        password: values.password,
      },
      withCredentials: true,
      url: 'http://localhost:3000/register', // replace with your server's URL
    })
      .then((res) =>
          console.log(res.data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(); // Call the register function here
  };

  const { email, password, confirmPassword, error } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3 py-2">
        <label htmlFor="email" className="small">
          Enter Email
        </label>
        <input
          className="form-control"
          type="text"
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
          Enter Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          placeholder=""
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group mb-3 py-1">
        <label htmlFor="confirmPassword" className="small">
          Confirm Password
        </label>
        <input
          className="form-control"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder=""
          value={confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="d-grid mb-3 p-2">
        {error && <p className="text-danger small">{error}</p>}
        <AuthButton className="py-2" buttonText='Register' onClick={handleSubmit}/>
        <Link className="text-center small mt-3" to="/login">
          Already have an account? Sign In
        </Link>
      </div>
    </form>
  );
}

export default RegistrationForm;
