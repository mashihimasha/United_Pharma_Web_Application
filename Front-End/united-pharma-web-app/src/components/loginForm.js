import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  // Function for handling Facebook login
  const handleFacebookLogin = () => {
    // Add your Facebook login logic here
  };

  // Function for handling Google login
  const handleGoogleLogin = () => {
    // Add your Google login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" value={email} placeholder="Enter email address" onChange={handleEmailChange} />
      </div>
      <div>
        <input type="password" value={password} placeholder="Enter password" onChange={handlePasswordChange} />
      </div>
      <button type="submit">Sign In</button>
      <div className="social">
        <button className="go" onclick={handleFacebookLogin}>
          <i className="fab fa-google"></i> Google
        </button>
        <button className="fb" onclick={handleGoogleLogin}>
          <i className="fab fa-facebook"></i> Facebook
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
