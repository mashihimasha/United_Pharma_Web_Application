import React, { useState } from 'react';
import FormInput from './FormInput';
import { Button } from 'react-bootstrap';

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
      <form> 
        <div id="profile-container">
          <img id="profileImage" src={require('../assets/img/banner/banner_shape01.png')} alt="user profile"/>
        </div>    
        <div className='input-group mt-4'>
          <input
              id="imageUpload"
              className='form-control w-25'
              type="file"
              name="profile_photo"
              accept="image/*"
              required
              aria-describedby="btn-changephoto" 
              aria-label="Upload"
          />
          <Button variant="success" type="submit" id="btn-changephoto" className='btn-sm text-white'>Change Photo</Button>
        </div>
      </form>    
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
            <Button
              variant="success"
              className="text-white my-4 mx-auto d-block"
              type="submit"
              name="update"
              value="update"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
