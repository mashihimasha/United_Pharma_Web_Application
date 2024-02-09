import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormInput from '../FormInput';
import { validateForm } from '../../../utils/validation';

const PasswordChangeModal = ({ show, handleClose, handleSubmit }) => {
  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const inputFields = [
    {
      name: 'oldPassword',
      type: 'password',
      label: 'Old Password',
      autoComplete: 'current-password',
      error: errors.oldPassword,
    },
    {
      name: 'newPassword',
      type: 'password',
      label: 'New Password',
      autoComplete: 'new-password',
      error: errors.newPassword,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      autoComplete: 'new-password',
      error: errors.confirmPassword,
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const handleUpdate = () => {
    const fields = inputFields.map((field) => ({
      name: field.name,
      value: values[field.name],
      setError: (error) => setErrors({ ...errors, [field.name]: error }),
    }));

    if (validateForm(fields)) {
      handleSubmit(values);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><h4 className="text-black">Change Password</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form for changing password */}
        <form>
          {inputFields.map((field, index) => (
            <FormInput
              key={index}
              name={field.name}
              type={field.type}
              label={field.label}
              value={values[field.name]}
              onChange={onChange}
              autoComplete={field.autoComplete}
              error={errors[field.name]}
              required
            />
          ))}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" className="text-white btn-sm rounded-pill" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" className="text-white btn-sm rounded-pill" onClick={handleUpdate}>
          Change Password
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PasswordChangeModal;