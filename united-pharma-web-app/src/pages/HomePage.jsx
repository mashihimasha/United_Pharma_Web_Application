import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/user/config/AuthContext';
import VideoArea from '../components/user/Home/VideoArea';
import { Button } from 'react-bootstrap';

const HomePage = () => {
    const { state } = useAuth(); 

    return (
        <VideoArea />
    );
};

export default HomePage;
