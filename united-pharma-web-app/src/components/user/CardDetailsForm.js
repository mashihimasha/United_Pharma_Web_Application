import React, { useState } from 'react';
import FormInput from './FormInput';

const CardDetailsForm = () => {
  const [values, setValues] = useState({
    cardName: 'Seylan Card Holder',
    cardNumber: '4XXX XXXX XXXX 1234',
    month: '08',
    year: '2024',
    cvc: '123',
  });

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
    //event.preventDefault();
    // Implement your form submission logic here
    //console.log('Form submitted:', values);
  };

  return (
    <div className="row">
      <div className="mx-auto pt-3">
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
          <button
            className="btn btn-danger text-white sm my-3"
            type="submit"
            name="submit1"
            value="submit"
          >
            <i className="fa fa-times-circle"></i> Remove Card
          </button>
          <button
            className="btn btn-success text-white sm my-3 mx-2"
            type="submit"
            name="submit1"
            value="submit"
          >
            <i className="fa fa-plus-circle"></i> Add Another Card
          </button>
        </form>
      </div>
    </div>
     
  );
};

export default CardDetailsForm;
