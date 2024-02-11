import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useAuth } from '../config/AuthContext';
import FormInput from '../FormInput';
import { Button } from 'react-bootstrap';
import { validateForm } from '../../../utils/validation';
import PasswordChangeModal from './ChangePassword';

const ProfileForm = () => {

  const { state } = useAuth();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    employeeID: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [userRole,setUserRole]=useState('');

  const handleSetUserRole = () => {
    if(state.user!==null){
      setUserRole(state.user.role);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await Axios.get(`http://127.0.0.1:3001/api/get/users/${state.user.id}`);
      const userData = response.data; // Adjust this based on your API response structure
      setValues({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        employeeID: userData.employeeID,
      });
      console.log(response);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails(); // Fetch user details when the component mounts
    handleSetUserRole();
  }, []); 

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

          <p id="email-address" className='small m-0'>mashi@gmail.com</p>
          <p id="employee-id" className={`small ${userRole === 'administrator' || userRole === 'pharmacist' ? 'd-block' : 'd-none'}`}>emp-12<br/>
          branch-12</p>

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
      <div className='d-flex flex-row flex-wrap ms-2'>
        <Button
          variant="dark"
          className="btn-sm text-white mt-4 me-2 rounded-pill d-flex align-self-center justify-self-start"
          type="button"
          name="change password"
          value="change password"
          onClick={handleShowPasswordModal}
        >Change Password</Button>

        <Link
          className={`btn btn-dark btn-sm text-white mt-4 me-2 
          rounded-pill d-flex align-self-center justify-self-start
          ${userRole === 'administrator' || userRole === 'pharmacist' ? 'd-block' : 'd-none'}`}
        ><i className='fa fa-plus me-1 mt-1'></i> New Pharmacist Account</Link>
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
