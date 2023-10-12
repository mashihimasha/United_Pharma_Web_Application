import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import 'font-awesome/css/font-awesome.min.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = this.state;

    try {
      // Perform registration logic here, such as sending a request to a server.
      // Replace this with your actual registration code.

      // Simulate a failed registration for demonstration purposes
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Successful registration logic here

      // Reset the form after successful registration
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: null,
      });
    } catch (error) {
      // Handle registration errors and update the error state
      this.setState({ error: error.message });
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword, error } = this.state;

    return (
     /*  <div className='col-md-8 col-lg-6'>
        <div className='registration d-flex align-items-center py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9 col-lg-8 mx-auto'>
                <h3 className='auth-heading mb-4'>Create an Account</h3> */
                <form onSubmit={this.handleSubmit}>
                <div className='form-row d-flex'>
                  <div className='form-group col-6 mb-3 px-2'>
                    <label htmlFor='firstName' className='small'>First Name</label>
                    <input
                      className='form-control'
                      type='text'
                      id='firstName'
                      name='firstName'
                      placeholder=''
                      value={firstName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className='form-group col-6 mb-3 px-2'>
                    <label htmlFor='lastName' className='small'>Last Name</label>
                    <input
                      className='form-control'
                      type='text'
                      id='lastName'
                      name='lastName'
                      placeholder=''
                      value={lastName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  </div>
                  <div className='form-group mb-3 px-2'>
                    <label htmlFor='email' className='small'>Email Address</label>
                    <input
                      className='form-control'
                      type='email'
                      id='email'
                      name='email'
                      placeholder=''
                      value={email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className='form-group mb-3 px-2'>
                    <label htmlFor='password' className='small'>Enter Password</label>
                    <input
                      className='form-control'
                      type='password'
                      id='password'
                      name='password'
                      placeholder=''
                      value={password}
                      onChange={this.handleInputChange}
                      required
                    />
                   
                  </div>
                  <div className='form-group mb-3 px-2'>
                    <label htmlFor='confirmPassword' className='small'>Confirm Password</label>
                    <input
                      className='form-control'
                      type='password'
                      id='confirmPassword'
                      name='confirmPassword'
                      placeholder=''
                      value={confirmPassword}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className='d-grid p-3'>
                    {error && <p className='text-danger'>{error}</p>}
                    <AuthButton buttonText='Register' onClick={this.handleRegistration} />
                    <Link className='text-center small pt-3' to='login'>
                      Already have an account? Sign In
                    </Link>
                  </div>
                </form>
              /* </div>
            </div>
          </div>
        </div>
      </div> */
    );
  }
}

export default RegistrationForm;
