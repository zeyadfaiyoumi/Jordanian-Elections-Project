import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import LoginForm from './pages/LoginPage';
import SignupPage from './pages/signUp';
import OtpForm from './pages/otpForm';



const App = () => {
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/LoginPage" element={<LoginForm />} />
        <Route path="/pages/signUp" element={<SignupPage />} />
        <Route path="/pages/aboutUs" element={<AboutUs />} />
        <Route path="/pages/optForm" element={<OtpForm />} />
        <Route path="/pages/contactUs" element={<ContactUs />} />
        </Routes>
    </Router>
  );
};

export default App;