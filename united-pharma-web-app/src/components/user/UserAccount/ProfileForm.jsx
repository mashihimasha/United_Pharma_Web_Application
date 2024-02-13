import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useAuth } from '../config/AuthContext';
import FormInput from '../FormInput';
import { Button } from 'react-bootstrap';
import { validateForm } from '../../../utils/validation';
import PasswordChangeModal from './ChangePassword';
import MessageModal from './MessageModel';

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

  const [name, setName]=useState({
    newFirstName: '',
    newLastName: '',
  });

  const updateSubmitErrors = (errors) => {
    setErrors(errors);
  };

  const [userRole,setUserRole]=useState('');

  const handleSetUserRole = () => {
    if (state.user !== null) {
      setUserRole(state.user.role);
    }
  };
  
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUnsuccessModal, setShowUnsuccessModal] = useState(false);


  const handleShowPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);
  const handleCloseMessageModal = () => setShowSuccessModal(false) && setShowUnsuccessModal(false) ;


  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };  

  const [file, setFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState('');

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
      console.log(state.user.role);

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
          userRole: userData.user.userGroup,
          employeeID: userData.employeeID,
        });

        setName({
          newFirstName: userData.user_details.firstName,
          newLastName: userData.user_details.lastName,
        })
        
        setFile(userData.profilePicture);
        
        console.log(response.data);
        console.log(file);
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
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 

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

  //update name
  const handleNameUpdate = async (event) => {
    event.preventDefault();

    setErrors({
      firstName: '',
      lastName: '',
      general: '',
    });
    if (isValidForm()) {
      try {
      
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:3001/api/change/details/',
          data: {
            firstName: values.firstName,
            lastName: values.lastName
          },
          headers: { 
            'Authorization': `Bearer ${token}`,
          }
        };
        
        Axios.request(config)
        .then((response) => {
          if(response.status ===  200){ 
            window.location.reload(false);
          }
          else{
            updateSubmitErrors({ ...errors, general: response.data.message });
          }
          console.log(response.status)
        })
        .catch((error) => {
          console.log(error);
        });
  
      } catch (error) {
        updateSubmitErrors({ ...errors, general: error });
      }
    }
  };


  //change pro pic
  const handleChangeProPic = async (event) => {
    event.preventDefault();
    console.log(state.user);
    setErrors({
      general: '',
    });
   
      try {
        if (!file) {
          // Handle the case where no file is selected
          console.error('No file selected');
          return;
        }

        const formData = new FormData();
        formData.append('profilephoto', file);
        
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          data: formData,
          url: 'http://127.0.0.1:3001/api/change/profilepicture',
          headers: { 
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          }
        };
        
        Axios.request(config)
        .then((response) => {
          if(response.status ===  200){ 
            setShowSuccessModal(true);
          }
          else{
            setShowUnsuccessModal(true);
          }
          console.log(response.status)
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
              <img id="profileImage" src={profilePicture || require('../../assets/img/auth/user.png')} alt="user profile"/>
            </div>    
            <div className='col d-flex align-items-center'>
              <div className=''>
                <p id="first-name" className='text-black small m-0 fw-bold'>{name.newFirstName} {name.newLastName}</p>
                <p id="email-address" className='text-success small m-0'>{values.email}</p>
                <p id="employee-id" className={`text-success small m-0 text-capitalize ${userRole === 'administrator' || userRole === 'pharmacist' ? 'd-block' : 'd-none'}`}>{values.userRole}</p>
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
          onClick={handleShowPasswordModal}
        >Change Password</Button>

        <Link
          to='/employeeRegistration'
          className={`btn btn-dark btn-sm text-white mt-4 me-2 
          rounded-pill d-flex align-self-center justify-self-start
          ${userRole === 'administrator' ? 'd-block' : 'd-none'}`}
        ><i className='fa fa-plus me-1 mt-1'></i> New Pharmacist Account</Link>
      </div>

      <PasswordChangeModal
        show={showPasswordModal}
        handleClose={handleClosePasswordModal}
      />

      {/*Update name and email address*/}
      <div className="row w-100">
        <div className="pt-3">
          <form id="user_details" onSubmit={handleNameUpdate}>
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
              type="submit"
              vale="update"
              className="text-white my-4 mx-auto d-block rounded-pill"
              onClick={handleNameUpdate}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
      <MessageModal 
        showSuccessModal={showSuccessModal} 
        showUnsuccessModal={showUnsuccessModal} 
        message='Profile Picture Changed'
        handleClose={handleCloseMessageModal}
      />
    </div>
  );
};

export default ProfileForm;
