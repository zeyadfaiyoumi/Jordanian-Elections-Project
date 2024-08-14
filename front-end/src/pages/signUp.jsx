import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import LoginForm from './LoginPage'; // Ensure this file contains the updated form
import OtpForm from './otpForm'; // Update to ensure consistent styling
import PasswordForm from './PasswordForm'; // Update to ensure consistent styling
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import backgroundImage from '../Media/jordan.jpg'; // Same background image
import logo from '../Media/logo.png'; // Same logo

function SignupPage() {
  const [step, setStep] = useState(1);
  const [nationalID, setNationalID] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        national_id: nationalID,
        name,
      });
      alert(response.data.message);
      setStep(2);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred';
      alert('Login failed: ' + errorMessage);
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/verify', {
        national_id: nationalID,
        otp,
      });
      Cookies.set('token', response.data.token); 
      alert('Login successful');
      setStep(3);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred';
      alert('Verification failed: ' + errorMessage);
    }
  };

  const handlePasswordSetup = async (password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/setup-password', {
        national_id: nationalID,
        password,
      });
      alert('Password set successfully');
      navigate('/');
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred';
      console.error('Password setup failed:', errorMessage);
      alert('Password setup failed: ' + errorMessage);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg relative flex flex-col items-center">
        <Link to="/" className="mb-6">
          <img src={logo} alt="Logo" className="h-20" /> {/* Adjust height as needed */}
        </Link>
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
            </h1>
            <LoginForm
              nationalID={nationalID}
              setNationalID={setNationalID}
              name={name}
              setName={setName}
              handleLogin={handleLogin}
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
              وصلك رمز التحقق
            </h1>
            <OtpForm
              otp={otp}
              setOtp={setOtp}
              handleVerify={handleVerify}
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
            </h1>
            <PasswordForm
              nationalID={nationalID}
              handlePasswordSetup={handlePasswordSetup}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupPage;
