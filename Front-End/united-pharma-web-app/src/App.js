import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage';
import BannerLeaves from './components/common/BannerLeaves';
import Blog from './components/Blog/components/Blog/blog'
import BlogPage from './components/Blog/blogPage'



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <RegisterPage/> } />
        <Route path="bannerLeaves" element={ <BannerLeaves/> } />
        <Route path="login" element={ <LoginPage/> } />
        <Route path="blog" element={ <BlogPage/> } />
      </Routes>

    </div>
  );
}

export default App;
