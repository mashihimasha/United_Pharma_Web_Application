import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showPassword: false, // Add state for toggling password visibility
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Function to toggle password visibility
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    // You can add your login logic here, such as sending a request to a server.

    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form after submission
    this.setState({ username: '', password: '' });
  };

  render() {
    const { email, password, showPassword} = this.state;

    return (
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
                <div className="col-md-8 col-lg-6">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                    <h3 className="login-heading mb-4">Welcome back!</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group mb-3 p-3">
                                            <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder='Enter Email'
                                            value={email}
                                            onChange={this.handleInputChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group mb-3 p-3">
                                            <input
                                            className="form-control"
                                            type={showPassword ? 'text' : 'password'} // Toggle input type
                                            id="password"
                                            placeholder="Enter Password"
                                            name="password"
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
                                        
                                        <div className="d-grid p-3">
                                            <button className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                                            <div className="text-center">
                                                <a className="small" href="forgotPassword.html">Forgot password?</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>

            </div>
        </div>
    )
    }
}

export default LoginForm;
