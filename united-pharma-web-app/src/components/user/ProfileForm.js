import React, { useState } from 'react';
import '../assets/css/User.css';
import Axios from 'axios';

function ProfileForm(){
  const [data, setData] = useState(null);
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/userProfile",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((error) => {
      console.error("Error fetching user data:", error);
    });
  };
  return (
    <div className='ProfileForm'>
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
      {data?<h1 className='text-black'>Welcome Back {data.email}</h1> : null}
    </div>
  );

}

export default ProfileForm;
