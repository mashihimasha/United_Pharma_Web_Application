import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormInput from '../FormInput';

const ShippingDetailsForm = ({ initialValues, showModal, handleClose }) => {
  const [values, setValues] = useState({
    receiverName: '',
    receiverPhone: '',
    addressLine1: '',
    city: '',
    province: '',
    zipCode: '',
  });

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const [isDefaultAddress, setIsDefaultAddress] = useState(false);

  const inputFields = [
    {
      name: 'receiverName',
      type: 'text',
      label: 'Recipient Name',
      autoComplete: 'name',
    },
    {
        name: 'receiverPhone',
        type: 'text',
        label: 'Recipient Phone',
        autoComplete: 'tel',
      },
    {
      name: 'addressLine1',
      type: 'text',
      label: 'Address',
      autoComplete: 'street-address',
    },
    {
      name: 'city',
      type: 'select',
      label: 'City',
      options: [ { label: '', value: '' },
      { label: 'Colombo', value: 'Colombo' },
      { label: 'Negombo', value: 'Negombo' },
      { label: 'Matara', value: 'Matara' },],
    },
    {
      name: 'province',
      type: 'select',
      label: 'Province',
      options: [ { label: '', value: '' },
      { label: 'Western', value: 'Western' },
      { label: 'Southern', value: 'Southern' },
      { label: 'Eastern', value: 'Eastern' },],
    },
    {
      name: 'zipCode',
      type: 'text',
      label: 'Zip Code',
      autoComplete: 'postal-code',
    },
    {
      name: 'isDefault',
      type: 'checkbox',
      value: true,
      label: 'Set as default shipping address',
      isChecked: isDefaultAddress,
      setIsChecked: setIsDefaultAddress,
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
        <Modal.Title><h4 className='text-black'>Shipping address</h4></Modal.Title>
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
                options={field.options}
                isChecked={field.isChecked}
                setIsChecked={field.setIsChecked}
                autoComplete={field.autoComplete}
                required
              />
            ))}
          </div>
          <Button variant="success" type="submit" className="my-3 mx-2 text-white">Save</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ShippingDetailsForm;