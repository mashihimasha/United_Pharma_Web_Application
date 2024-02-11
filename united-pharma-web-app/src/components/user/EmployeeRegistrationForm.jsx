import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './config/AuthContext';
import Axios from 'axios';
import AuthButton from './AuthButton';
import RegistrationSuccess from './RegistrationSuccess';
import FormInput from './FormInput';
import { validateForm } from '../../utils/validation';

const EmployeeRegistrationForm = () => {

  const { state } = useAuth();
  
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    userRole: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    general: '',
  });

  const updateSubmitErrors = (errors) => {
    setErrors(errors);
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputFields = [
    {
      name: 'email',
      type: 'text',
      label: 'Enter Email',
      autoComplete: 'username',
      error: errors.email,
      required: true,
    },
    {
      name: 'employeeId',
      type: 'text',
      label: 'Enter Employee ID',
      autoComplete: 'none',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      label: 'Enter Password',
      autoComplete: 'new-password',
      error: errors.password,
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      autoComplete: 'new-password',
      error: errors.confirmPassword,
      required: true,
    },
  ];

  const isValidForm = () => {

    const fields = inputFields.map((field) => ({
        name: field.name,
        value: values[field.name],
        setError: (error) => setErrors({ ...errors, [field.name]: error }),
      }));
  
      if (validateForm(fields)) {
        console.log(state.user);
        return true;
      }
      return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(state.user.role);

    setErrors({
      email: '',
      password: '',
      confirmPassword: '',
      employeeId: '',
      general: '',
    });
    if (isValidForm()) {
        try {
          
        const response = await Axios.post('http://127.0.0.1:3001/api/users/register/', {
            employeeID: values.employeeId,
            email: values.email,
            password: values.password,
            userRole: 'pharmacist',
            user: state.user,
        });

        if (response.status === 201) {
            setShowSuccessModal(true);
        } else {
          updateSubmitErrors({ ...errors, general: response.data.message });
          console.log(response.data.message);
        }
        } catch (error) {
          updateSubmitErrors({ ...errors, general: error.response.data.message});
          console.error(error);
        }
    }
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
            onChange={onChange}
            error={field.error}
            autoComplete={field.autoComplete}
          />
        ))}

        {errors.general && (
          <p className="text-danger small px-2">{errors.general}</p>
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
};

export default EmployeeRegistrationForm;
