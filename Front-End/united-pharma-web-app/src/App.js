import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/user/Footer';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Routes>
          <Route path='/' element={ <RegisterPage/> } />
          <Route path='login' element={ <LoginPage/> } />
          <Route path='userProfile' element={ <UserProfile/> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
