import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import '../src/components/assets/css/animate.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/common/Footer';
import UserProfile from './pages/UserProfile';
import ForgotPasswordForm from './components/user/ForgotPasswordForm';
import Sidebar from './components/user/UserAccount/Sidebar';
import StoreLocator from './pages/StoreLocator';

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <Routes>
          <Route path='register' element={ <RegisterPage/> } />
          <Route path='/' element={ <LoginPage/> } />
          <Route path='userProfile' element={ <UserProfile/> } />
          <Route path='/forgotPassword' element={<ForgotPasswordForm/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/storelocator' element={<StoreLocator/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;