import React, { Component } from 'react';
import AuthButton from './authButton';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/css/user.css';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = this.state;

    try {
      // Perform registration logic here, such as sending a request to a server.
      // Replace this with your actual registration code.

      // Simulate a failed registration for demonstration purposes
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
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
    const { firstName, lastName, email, password, confirmPassword, showPassword, error } = this.state;

    return (
      <div className="col-md-8 col-lg-6">
        <div className="registration d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
                <h3 className="registration-heading mb-4">Create an Account</h3>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group mb-3 p-1">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3 p-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3 p-1">
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3 p-1">
                    <label htmlFor="password">Enter Password</label>
                    <input
                      className="form-control"
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={this.handleInputChange}
                      required
                    />
                    <div className="password-input">
                      <i
                        className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                        onClick={this.togglePasswordVisibility}
                      ></i>
                    </div>
                  </div>
                  <div className="form-group mb-3 p-1">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      className="form-control"
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="d-grid p-3">
                    {error && <p className="text-danger">{error}</p>}
                    <AuthButton buttonText="Register" onClick={this.handleRegistration} />
                    <div className="text-center">
                        <a className="small" href="forgotPassword.html">Already have an account? Sign In</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
