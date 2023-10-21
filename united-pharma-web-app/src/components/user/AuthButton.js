import React from 'react';
import '../assets/css/User.css';

const AuthButton = ({ buttonText, onClick }) => {
  return (
    <button
      className='btn-custom text-uppercase mb-2'
      type='submit'
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
