import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage';

import BlogPage from './pages/Blog/blogPage';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <RegisterPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/blog" element={ <BlogPage/> } />
      </Routes>
    </div>
  );
}

export default App;
