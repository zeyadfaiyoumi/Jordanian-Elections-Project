
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import SignupPage from './pages/signUp';
import OtpForm from './pages/OtpForm';
import LoginForm from './pages/LoginForm';
import Login from './pages/login';

import Voting from "./pages/electoralLists/voting";

import LocalListings from "./pages/electoralLists/LocalListings";
import Electoraldistricts from "./pages/electoralLists/ElectoralDistricts";
import PartyLists from "./pages/electoralLists/party_lists";
import Modal from "react-modal";
import PaymentComponent from "./pages/payment/payment";


// بعد الاستيراد، تحتاج إلى تعيين العنصر الجذر للتأكد من أن المودال يظهر بشكل صحيح.
Modal.setAppElement("#root"); // أو أي عنصر جذر آخر في تطبيقك



const App = () => {
  return (
    
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/LoginForm" element={<LoginForm />} />
        <Route path="/pages/signUp" element={<SignupPage />} />
        <Route path="/pages/aboutUs" element={<AboutUs />} />
        <Route path="/pages/optForm" element={<OtpForm />} />
        <Route path="/pages/contactUs" element={<ContactUs />} />
             <Route path="/Districts" element={<Electoraldistricts />} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/lists/:districtId" element={<LocalListings />} />
        <Route path="/party_lists" element={<PartyLists />} />
        <Route path="/PaymentComponent" element={<PaymentComponent />} />
        </Routes>
    </Router>
  );
};

export default App;

