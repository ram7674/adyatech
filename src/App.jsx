import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import Service from './pages/Service/Service';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import HomeComponent from './pages/HomeComponent/HomeComponent';

import AOSInitializer from '../src/AOSInitializer/AOSInitializer';  // Import the AOS initializer
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* scroll to top */}
      <AOSInitializer /> {/* Initialize AOS globally */}
      <Routes>
        <Route path='/' element={<HomeComponent />} >
          <Route index={true} element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/clients' element={<Clients/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Service />} />
          <Route path='/services/:serviceId' element={<ServicesPage />} /> {/* Dynamic service-specific page */}
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;