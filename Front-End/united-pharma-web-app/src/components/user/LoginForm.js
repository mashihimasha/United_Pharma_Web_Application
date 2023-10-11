import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import 'font-awesome/css/font-awesome.min.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showPassword: false, // state for toggling password visibility
      error: null, //error state
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  // Function to toggle password visibility
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      // Perform login logic here, such as sending a request to a server.
      // Replace this with your actual authentication code.

      // Simulate a failed login for demonstration purposes
      if (email !== 'user@example.com' || password !== 'password') {
        throw new Error('Invalid username or password');
      }

      // Successful login logic here

      // Reset the form after successful login
      this.setState({ email: '', password: '', error: null });
    } catch (error) {
      // Handle authentication errors and update the error state
      this.setState({ error: error.message });
    }
  };

  render() {
    const { email, password, showPassword, error} = this.state;

    return (
        /* <div className='col-md-8 col-lg-6'>
            <div className='login d-flex align-items-center py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9 col-lg-8 mx-auto'>
                            <h3 className='auth-heading mb-4 p-4'>Welcome back!</h3> */
                            <form onSubmit={this.handleSubmit}>
                                <div className='form-group mb-3 py-2'>
                                    <label htmlFor='email'>Email Address</label>
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
                                <div className='form-group mb-3 py-1'>
                                    <label htmlFor='password'>Enter Password</label>
                                    <input
                                    className='form-control'
                                    type={showPassword ? 'text' : 'password'} // Toggle input type
                                    id='password'
                                    placeholder=''
                                    name='password'
                                    value={password}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                    <div className='password-input'>
                                        <i
                                        className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                        onClick={this.togglePasswordVisibility}
                                        ></i>
                                    </div>
                                </div>    
                                <div className='form-group mb-3'>
                                  <Link className='text-right small px-3 col-6' to='forgotPassword'>Forgot password?</Link>
                                </div>

                                <div className='d-grid mb-3 p-2'>
                                    {error && <p className='text-danger'>{error}</p>} {/* Display error message */}

                                    <AuthButton className='py-2' buttonText='Sign In' onClick={this.handleLogin} />

                                    <Link className='text-center small' to='/'>
                                        Create Account?
                                    </Link>
                                  <div className='form-row d-flex mt-4  align-baseline'>
                                    <hr className='my-4 text-success col-4'/>
                                    <p className='text-dark text-center small col-4'>Or continue with</p>
                                    <hr className='my-4 text-success col-4'/>
                                  </div>  
                                </div>

                            </form>
                       /*  </div>
                    </div>
                </div>
            </div>
        </div> */
               
    )
    }
}

export default LoginForm;
