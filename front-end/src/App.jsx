import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import LoginPage from './pages/LoginPage';



const App = () => {
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/LoginPage" element={<LoginPage />} />
        <Route path="/pages/aboutUs" element={<AboutUs />} />
        <Route path="/pages/contactUs" element={<ContactUs />} />
        </Routes>
    </Router>
  );
};

export default App;