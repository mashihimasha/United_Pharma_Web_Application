import React, { Component } from 'react';
import LoginForm from '../components/loginForm'; // Import the LoginForm component

class LoginPage extends Component {
  // You can add any additional logic or state here if needed

  render() {
    return (
      <div>
        <LoginForm /> {/* Render the LoginForm component */}
      </div>
    );
  }
}

export default LoginPage;
