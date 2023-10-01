import React, { Component } from 'react';
import LoginForm from '../components/user/loginForm'; // Import the LoginForm component

class LoginPage extends Component {
  // additional logic or state here if needed

  render() {
    return (
      <div>
        <LoginForm /> {/* Render the LoginForm component */}
      </div>
    );
  }
}

export default LoginPage;
