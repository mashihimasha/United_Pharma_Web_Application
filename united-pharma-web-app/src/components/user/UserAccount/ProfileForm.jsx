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
  const token = localStorage.getItem('token');

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
    if (state.user !== null) {
      setUserRole(prevUserRole => state.user.role);
    }
  };
  
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleShowPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };  

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

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
  
  //fetch user details axios
  const fetchUserDetails = async () => {
    try {
      
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:3001/api/get/user',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
      
      Axios.request(config)
      .then((response) => {
        const userData = response.data; 
        setValues({
          firstName: userData.user_details.firstName,
          lastName: userData.user_details.lastName,
          email: userData.user.email,
          employeeID: userData.employeeID,
        });
        console.log(values.email);
        console.log(values.firstName);
        console.log(values.lastName)
      })
      .catch((error) => {
        console.log(error);
      });

    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  //fetch user details axios end

  useEffect(() => {
    fetchUserDetails(); // Fetch user details when the component mounts
    handleSetUserRole();
  }, []); 

  const isValidForm = () => {
    const fields = inputFields.map((field) => ({
      name: field.name,
      value: values[field.name],
      setError: (error) => setErrors({ ...errors, [field.name]: error }),
    }));

    if (validateForm(fields)) {
      return true;
    }
    return false;
  };

  const handleChangeProPic = async (event) => {
    event.preventDefault();
    
    setErrors({
      general: '',
    });
    const formData = new FormData();
    formData.append('profilephoto', file);

      try {
      
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:3001/api/change/profilepicture',
          headers: { 
            'Authorization': `Bearer ${token}`
          }
        };
        
        Axios.request(config)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
  
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    
  };

  return (
    <div className='d-flex flex-column align-items-start '>
      <div className='d-flex ms-2 pt-3'>
        {/*Profile Picture Changing*/}
        <form onSubmit={handleChangeProPic}> 
          <div className='d-flex flex-row flex-wrap'>
            <div id="profile-container" className='col'>
              <img id="profileImage" src={require('../../assets/img/auth/user.png')} alt="user profile"/>
            </div>    
            <div className='col d-flex align-items-center'>
              <div className=''>
                <p id="first-name" className='text-black small m-0 fw-bold'>{values.firstName} {values.lastName}</p>
                <p id="email-address" className='text-success small m-0'>{values.email}</p>
                <p id="employee-id" className={`small ${userRole === 'administrator' || userRole === 'pharmacist' ? 'd-block' : 'd-none'}`}>emp-12<br/>
                branch-12</p>
              </div>
            </div>
          </div>
          <div className='input-group input-group-sm mt-4'>
            <input
                id="imageUpload"
                className='form-control rounded-pill me-2'
                type="file"
                name="profile_photo"
                accept="image/*"
                required
                onChange={handleFileChange}
                aria-describedby="btn-changephoto" 
                aria-label="Upload"
            />
            <Button variant="dark" type="submit" id="btn-changephoto" className='btn-sm text-white rounded-pill' onClick={handleChangeProPic}>Change Photo</Button>
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
