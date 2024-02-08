import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormInput from '../FormInput';

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
      autoComplete: 'cc-name',
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
      autoComplete: 'cc-exp-month',
    },
    {
      name: 'year',
      type: 'text',
      label: 'Year',
      autoComplete: 'cc-exp-year',
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
        <Modal.Title><h4 className='text-black'>Card details</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div class="form-row d-flex flex-row flex-wrap">
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
          </div>
          <Button variant="success" type="submit" className="my-3 mx-2 text-white">Save</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CardDetailsForm;