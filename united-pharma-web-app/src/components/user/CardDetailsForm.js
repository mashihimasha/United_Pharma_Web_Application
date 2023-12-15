import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import { Modal, Button } from 'react-bootstrap';

const CardDetailsForm = ({ initialValues, showModal, handleClose }) => {
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  useEffect(() => {
    // Set initial values when the prop changes
    setValues(initialValues);
  }, [initialValues]);

  const inputFields = [
    {
      name: 'cardName',
      type: 'text',
      label: 'Name on Card',
      autoComplete: 'name',
    },
    {
      name: 'cardNumber',
      type: 'text',
      label: 'Card Number',
      autoComplete: 'cc-number',
    },
    {
      name: 'month',
      type: 'text',
      label: 'Month',
    },
    {
      name: 'year',
      type: 'text',
      label: 'Year',
    },
    {
      name: 'cvc',
      type: 'text',
      label: 'CVC',
      autoComplete: 'cc-csc',
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // console.log('Form submitted:', values);
    // Close the modal after submission
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Card Details Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <FormInput
              key={index}
              name={field.name}
              type={field.type}
              label={field.label}
              value={values[field.name]}
              onChange={onChange}
              autoComplete={field.autoComplete}
            />
          ))}
          <Button variant="danger" type="submit" className="my-3">
            <i className="fa fa-times-circle"></i> Remove Card
          </Button>
          <Button variant="success" type="submit" className="my-3 mx-2">
            <i className="fa fa-plus-circle"></i> Add Another Card
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CardDetailsForm;