import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../user/config/AuthContext';

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Link to="#" onClick={logout} className="logout-button">
            Logout
        </Link>
    );
};

export default LogoutButton;
