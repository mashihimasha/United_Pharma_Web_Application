import React from 'react';
import '../assets/css/user.css';

const AuthButton = ({ buttonText, onClick }) => {
  return (
    <button
      className="btn text-uppercase fw-bold mb-2"
      type="submit"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
