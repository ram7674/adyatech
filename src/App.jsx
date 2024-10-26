import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
import ItStaffing from './pages/ItStaffing/ItStaffing';
import DataScience from './pages/DataScience/DataScience';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import MobileApplications from './pages/MobileApplications/MobileApplications';

import AOSInitializer from '../src/AOSInitializer/AOSInitializer';  // Import the AOS initializer


function App() {
  return (
    <BrowserRouter>
      <AOSInitializer /> {/* Initialize AOS globally */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/clients' element={<Clients/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services/it-staffing-consulting' element={<ItStaffing/>} />
        <Route path='/services/data-science' element={<DataScience/>} />
        <Route path='/services/web-development' element={<WebDevelopment/>} />
        <Route path='/services/mobile-applications' element={<MobileApplications/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;