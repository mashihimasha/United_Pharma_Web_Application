import React, { useState } from 'react';
import FormInput from './FormInput';

const ProfileForm = () => {
  const [values, setValues] = useState({
    firstName: 'Solar',
    lastName: 'Luna',
    email: 'sluna@gmail.com',
  });

  const inputFields = [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
      autoComplete: 'family-name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      autoComplete: 'email',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Enter Password',
      autoComplete: 'current-password',
    },
  ];

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <div className='d-flex align-items-center mx-auto pt-3'>
        <div id="profile-container">
          <img id="profileImage" src={require('../assets/img/banner/banner_shape01.png')}/>
        </div>
        <input
          id="imageUpload"
          type="file"
          name="profile_photo"
          placeholder="Photo"
          required=""
          capture=""
        />
        <div className="dropdown-user-details gradient-border">
          <h4 className="text-black ml-2">Welcome Back !</h4>
          <div className="dropdown-user-details-name ml-3 text-black">Solar Luna</div>
          <div className="dropdown-user-details-email ml-3">sluna@gmail.com</div>
        </div>
      </div>
      <div className="row">
        <div className="pt-3">
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
              className="btn btn-success text-white sm my-4 mx-auto d-block"
              type="submit"
              name="submit1"
              value="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
