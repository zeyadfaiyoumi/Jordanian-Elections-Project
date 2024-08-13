import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../Media/jordan.jpg'; // Adjust the path to your background image
import logo from '../Media/logo.png'; // Adjust the path to your logo image

const LoginPage = () => {
  const [formData, setFormData] = useState({
    socialId: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative flex flex-col items-center">
        <Link to="/" className="mb-6">
          <img src={logo} alt="Logo" className="h-20" /> {/* Adjust the height as needed */}
        </Link>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          تسجيل الدخول
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label
              htmlFor="socialId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              الرقم الوطني
            </label>
            <input
              type="text"
              id="socialId"
              name="socialId"
              value={formData.socialId}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              البريد الألكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
