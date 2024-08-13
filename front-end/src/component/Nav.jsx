import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Media/logo.png'; // Adjust the path to your logo image

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" /> {/* Adjust logo size as needed */}
          </Link>
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

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center">
          <Link to="/pages/aboutUs" className="hover:text-gray-600">
            من نحن
          </Link>
          <Link to="/pages/contactUs" className="hover:text-gray-600">
            تواصل معنا
          </Link>
          <Link
            to="/pages/LoginPage"
            className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
          >
            تسجيل دخول
          </Link>
        </div>

        {/* Navigation Links (Mobile) */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="absolute top-4 right-4 p-2"
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
            to="/pages/LoginPage"
            className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            تسجيل دخول
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
