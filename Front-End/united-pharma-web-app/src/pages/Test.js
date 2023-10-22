import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/common/Footer';
import UserProfile from './pages/UserProfile';
import ForgotPasswordForm from './components/user/ForgotPasswordForm';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Routes>
          <Route path='register' element={ <RegisterPage/> } />
          <Route path='/' element={ <LoginPage/> } />
          <Route path='userProfile' element={ <UserProfile/> } />
          <Route path='login/forgotPassword' element={<ForgotPasswordForm/>}/>
            <Link className="text-center small mt-3" to="/register">
            Already have an account? Sign In
            </Link>
            <button to='/register'></button>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
