import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage';
import BannerLeaves from './components/common/BannerLeaves';
import Footer from './components/user/Footer';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Routes>
          <Route path='/' element={ <RegisterPage/> } />
          <Route path='bannerLeaves' element={ <BannerLeaves/> } />
          <Route path='login' element={ <LoginPage/> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
