import React from 'react';
import './App.css';
// import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ReactDOM from "react-dom/client";
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
// import FooterTab from './components/common_components/footer/footertab';

import Quotation from './pages/quotation/quotationForm'



function App() {
  return (
    <>
    
    <div className='App'>
        {/* <Preloader/> */}
        {/* <StickyHeader/> */}
        <main className='main'>
          <Routes>
            <Route path='/' element={ <ShopPage/> } />
            <Route path='/shopDetails' element={ <ShopDetails/> } />
            <Route path='/wholesale' element={ <Wholesale/> } />
            <Route path='/quotation' element={ <Quotation/> } />
            
          </Routes>
        </main>
        
      </div>

     

      {/* <Routes>
        <Route path="/" element={ <ShopDetails/> } />
        <Route path="shopPage" element={ <ShopPage/> } />
        <Route path="bannerLeaves" element={ <BannerLeaves/> } />
        <Route path="login" element={ <LoginPage/> } />
      </Routes> */}

      {/* <Wholesale/> */}
      {/* <Quotation/> */}
        
      {/* <FooterTab/> */}
      {/* <ShopDetails/> */}
      {/* <ShopPage/> */}
      {/* <Product/> */}

    
 
    </>
  );
}

export default App;
