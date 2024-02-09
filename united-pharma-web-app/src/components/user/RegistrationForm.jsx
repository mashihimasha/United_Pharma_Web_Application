import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AuthButton from './AuthButton';
import RegistrationSuccess from './RegistrationSuccess';
import FormInput from './FormInput';

const RegistrationForm = () => {
  
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userRole: '',
  });

  const [submitErrors, setSubmitErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    general: '',
  });

  const updateSubmitErrors = (errors) => {
    setSubmitErrors(errors);
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isWholesaleChecked, setIsWholesaleChecked] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);
  
  const inputFields = [
    {
      name: 'email',
      type: 'text',
      label: 'Enter Email',
      autoComplete: 'username',
      error: submitErrors.email,
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      label: 'Enter Password',
      autoComplete: 'new-password',
      error: submitErrors.password,
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      autoComplete: 'new-password',
      error: submitErrors.confirmPassword,
      required: true,
    },
    {
      name: 'isWholeSale',
      type: 'checkbox',
      value: 'wholesale',
      label: 'I am a wholesale customer',
      autoComplete: 'none',
      isChecked: isWholesaleChecked,
      setIsChecked: setIsWholesaleChecked,
    },
    {
      name: 'agreeToTermsAndConditions',
      value: 'agreed',
      type: 'checkbox',
      label: 'I agree to the terms and conditions',
      autoComplete: 'none',
      required: true,
      isChecked: isAgreeChecked,
      setIsChecked: setIsAgreeChecked,
    },
  ];

  const isValidForm = () => {
    let isValid = true;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (!emailPattern.test(values.email)) {
      updateSubmitErrors((prevErrors) => ({ ...prevErrors, 
        email: 'You have entered an invalid e-mail address. Please try again.' }));
      isValid = false;
    }

    if (!passwordPattern.test(values.password)) {
      updateSubmitErrors((prevErrors) => ({ ...prevErrors, 
        password: 'Please choose a stronger password. Try a mix of letters, numbers and symbols.' }));
      isValid = false;
    }

    if (values.password !== values.confirmPassword) {
      updateSubmitErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords don't match",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setSubmitErrors({
      email: '',
      password: '',
      confirmPassword: '',
      general: '',
    });
    if (isValidForm()) {
      try {
        const response = await Axios.post('http://localhost:3000/register', {
          email: values.email,
          password: values.password,
          userRole: isWholesaleChecked ? "wholesale" : "retail",
          agreedTermsAndConditions: isAgreeChecked ? 1 : 0,
        });

        if (response.data === 'User Created') {
          setShowSuccessModal(true);
        } else {
          updateSubmitErrors({ ...submitErrors, general: response.data });
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="RegistrationForm">
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <FormInput
            key={index}
            name={field.name}
            type={field.type}
            label={field.label}
            value={values[field.name]}
            isChecked={field.isChecked}
            setIsChecked={field.setIsChecked}
            onChange={onChange}
            error={field.error}
            autoComplete={field.autoComplete}
          />
        ))}

        {submitErrors.general && (
          <p className="text-danger small px-2">{submitErrors.general}</p>
        )}

        <div className="d-grid mb-3 p-2">
          <AuthButton className="py-2" buttonText="Register" onClick={handleSubmit} />
          <Link className="text-center small mt-3" to="/">
            Already have an account? Sign In
          </Link>
        </div>
      </form>
      <RegistrationSuccess showSuccessModal={showSuccessModal} />
    </div>
  );
}

export default RegistrationForm;
