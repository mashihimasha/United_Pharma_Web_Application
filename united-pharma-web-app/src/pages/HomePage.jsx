import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/user/config/AuthContext';
import VideoArea from '../components/user/Home/VideoArea';

const HomePage = () => {
    const { state, logout } = useAuth(); // Replace with your actual hook or context

    return (
      <div>
        {state.user ? (
          <div>
            <p>Welcome, {state.user.role}!</p>
            <Link to='/employeeRegistration'>Register Pharmacist</Link>
            <Link to='/userProfile'>To User Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>Not logged in. Redirect to login page or handle accordingly.</p>
        )}
        <VideoArea />
      </div>
    );
};

export default HomePage;
