import React, { useState } from 'react';
import FormInput from '../FormInput';
import { Button } from 'react-bootstrap';
import { validateForm } from '../../../utils/validation';
import PasswordChangeModal from './ChangePassword';

const ProfileForm = () => {
  const [values, setValues] = useState({
    firstName: 'Solar',
    lastName: 'Luna',
    email: 'sluna@gmail.com',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
      error: errors.email,
    },
  ];

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleShowPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);

   const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const validateAndSubmit = () => {
    const fields = inputFields.map((field) => ({
      name: field.name,
      value: values[field.name],
      setError: (error) => setErrors({ ...errors, [field.name]: error }),
    }));

    if (validateForm(fields)) {
      //form submission logic here
      handleSubmit();
      console.log('Form submitted:', values);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Form submitted:', values);
  };

  return (
    <div className='d-flex flex-column align-items-start '>
      <div className='d-flex ms-2 pt-3'>
        {/*Profile Picture Changing*/}
        <form> 
          <div id="profile-container">
            <img id="profileImage" src={require('../../assets/img/auth/user.png')} alt="user profile"/>
          </div>    
          <div className='input-group input-group-sm mt-4'>
            <input
                id="imageUpload"
                className='form-control rounded-pill me-2'
                type="file"
                name="profile_photo"
                accept="image/*"
                required
                aria-describedby="btn-changephoto" 
                aria-label="Upload"
            />
            <Button variant="dark" type="submit" id="btn-changephoto" className='btn-sm text-white rounded-pill'>Change Photo</Button>
          </div>
        </form>    
      </div>
      {/*Change Password Button*/}
      <div className='d-flex ms-2'>
        <Button
          variant="dark"
          className="btn-sm text-white mt-4 mx-auto rounded-pill d-flex align-self-center justify-self-start"
          type="button"
          name="change password"
          value="change password"
          onClick={handleShowPasswordModal}
        >Change Password</Button>
      </div>

      <PasswordChangeModal
        show={showPasswordModal}
        handleClose={handleClosePasswordModal}
      />

      {/*Update name and email address*/}
      <div className="row w-100">
        <div className="pt-3">
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
          
            <Button
              variant="success"
              className="text-white my-4 mx-auto d-block rounded-pill"
              onClick={validateAndSubmit}
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
