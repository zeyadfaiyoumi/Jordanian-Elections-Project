import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Media/logo.png"; // Correctly import logo image
import navbarBackground from "../Media/navbar_1.png"; // Import the background image
import Cookies from 'js-cookie'; // Import cookies library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle user logout
  const handleLogout = () => {
    Cookies.remove('token'); // Remove token from cookies
    alert('You have been logged out'); // Inform user
    navigate('/'); // Redirect to home or login page
  };

  // Check if the user is logged in
  const isLoggedIn = !!Cookies.get('token');

  return (
    <nav
      className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md w-full"
      style={{
        backgroundImage: `url(${navbarBackground})`, // Use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100px", // Set a fixed height for the navbar
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Login/Logout Button (Left) */}
        <div className="flex-shrink-0">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded"
            >
              تسجيل خروج
            </button>
          ) : (
            <Link
              to="/pages/signUp"
              className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
            >
              تسجيل دخول
            </Link>
          )}
        </div>

        {/* Logo and Other Links (Right) */}
        <div className="flex-grow flex items-center justify-end space-x-4">
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/pages/aboutUs" className="hover:text-gray-600">
              من نحن
            </Link>
            <Link to="/pages/contactUs" className="hover:text-gray-600">
              تواصل معنا
            </Link>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10" /> {/* Adjust logo size as needed */}
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Mobile) */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            to="/pages/aboutUs"
            className="text-lg hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            من نحن
          </Link>
          <Link
            to="/pages/contactUs"
            className="text-lg hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            تواصل معنا
          </Link>
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false); // Close the menu on logout
              }}
              className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded"
            >
              تسجيل خروج
            </button>
          ) : (
            <Link
              to="/pages/signUp"
              className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
              onClick={() => setIsOpen(false)} // Close the menu on link click
            >
              تسجيل دخول
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
