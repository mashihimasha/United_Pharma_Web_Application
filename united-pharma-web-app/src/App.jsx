import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import RegisterPage from './pages/RegisterPage';
import BannerLeaves from './components/common/BannerLeaves';
import './components/assets/css/animate.min.css';
import ProductCatalog from './components/product_catalog/ProductCatalog';
import ShopPage from './pages/ShopPage';
import ShopDetails from './pages/ShopDetails';
import './components/assets/css/catalog.css';
import './components/assets/css/responsive.css';
import './components/assets/css/default.css';
import './components/assets/css/user.css';
import './components/assets/css/style.css';
import Wholesale from './pages/wholesale/wholesale';
import FooterTab from './components/common_components/footer/footertab';

function App() {
  return (
    <>
    <div className="App">
      

      {/* <Routes>
        <Route path="/" element={ <ShopDetails/> } />
        <Route path="shopPage" element={ <ShopPage/> } />
        <Route path="bannerLeaves" element={ <BannerLeaves/> } />
        <Route path="login" element={ <LoginPage/> } />
      </Routes> */}

      {/* <Wholesale/> */}
      <FooterTab/>
      {/* <ShopDetails/> */}

    </div>
    </>
  );
}

export default App;
