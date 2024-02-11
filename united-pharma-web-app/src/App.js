import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage';
import BannerLeaves from './components/common/BannerLeaves';
import BlogList from './pages/Blog/BlogList';
import FAQ from './pages/Blog/FAQ/faq'
import Chat from './pages/Blog/chat/chat';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/blogs" element={ <BlogList/> } />
        <Route path="/faq" element={ <FAQ/> } />
        <Route path="/chat" element={ <Chat/> } />
        
      </Routes>

    </div>
  );
}

export default App;
