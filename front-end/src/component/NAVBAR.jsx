// import React from "react";
// import { Search, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav
//       className="flex items-center justify-between px-4 py-2 bg-cover bg-center shadow-md"
//       style={{ backgroundImage: `url('/mnt/data/navbar 1.png')` }}
//     >
//       <div className="flex items-center space-x-4">
//         <span className="text-red-500 font-bold">English</span>
//         <span className="text-gray-500">English</span>
//       </div>

//       <div className="flex items-center space-x-4">
//         <Search className="text-gray-600 w-5 h-5" />
//         <Instagram className="text-black w-5 h-5" />
//         <Facebook className="text-black w-5 h-5" />
//         <Youtube className="text-black w-5 h-5" />
//         <Twitter className="text-black w-5 h-5" />
//       </div>

//       <div className="flex items-center space-x-4">
//         <div className="w-8 h-8 bg-gray-200">
//           {/* Placeholder for the logo/image on the right */}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
////////////////////////////////////

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import logo from "front-end/public/logo.png"; // Adjust the path to your logo image
// import logo from "../../public/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-10" />{" "}
//             {/* Adjust logo size as needed */}
//           </Link>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center">
//           <Link to="/pages/aboutUs" className="hover:text-gray-600">
//             من نحن
//           </Link>
//           <Link to="/pages/contactUs" className="hover:text-gray-600">
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
//           >
//             تسجيل دخول
//           </Link>
//         </div>

//         {/* Navigation Links (Mobile) */}
//         <div
//           className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <Link
//             to="/pages/aboutUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             من نحن
//           </Link>
//           <Link
//             to="/pages/contactUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => setIsOpen(false)}
//           >
//             تسجيل دخول
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// ///////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md"
//       style={{
//         backgroundImage: "url('/public/navbar 1.png')", // استخدم اسم الصورة من مجلد public
//         backgroundSize: "cover", // لجعل الخلفية تغطي كامل المساحة
//         backgroundPosition: "center", // لتوسيط الصورة في الخلفية
//       }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-10" />{" "}
//             {/* Adjust logo size as needed */}
//           </Link>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center">
//           <Link to="/pages/aboutUs" className="hover:text-gray-600">
//             من نحن
//           </Link>
//           <Link to="/pages/contactUs" className="hover:text-gray-600">
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
//           >
//             تسجيل دخول
//           </Link>
//         </div>

//         {/* Navigation Links (Mobile) */}
//         <div
//           className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <Link
//             to="/pages/aboutUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             من نحن
//           </Link>
//           <Link
//             to="/pages/contactUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => setIsOpen(false)}
//           >
//             تسجيل دخول
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// ////////////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md"
//       style={{
//         backgroundImage: "url('/navbar 1.png')", // استخدم اسم الصورة من مجلد public
//         backgroundSize: "cover", // لجعل الخلفية تغطي كامل المساحة
//         backgroundPosition: "center", // لتوسيط الصورة في الخلفية
//       }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo and Login Button */}
//         <div className="flex items-center space-x-4">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-16" /> {/* تكبير اللوغو */}
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
//           >
//             تسجيل دخول
//           </Link>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center">
//           <Link to="/pages/aboutUs" className="hover:text-gray-600">
//             من نحن
//           </Link>
//           <Link to="/pages/contactUs" className="hover:text-gray-600">
//             تواصل معنا
//           </Link>
//         </div>

//         {/* Navigation Links (Mobile) */}
//         <div
//           className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <Link
//             to="/pages/aboutUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             من نحن
//           </Link>
//           <Link
//             to="/pages/contactUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => setIsOpen(false)}
//           >
//             تسجيل دخول
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// //////////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/logo.png"; // Adjust the path to your logo image
// import Logo from "../../public/logo.png"; // New logo on the right

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md"
//       style={{
//         backgroundImage: "url('/public/navbar 1.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Logo */}

//         {/* Navigation Links (Desktop) */}
//         <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center">
//           <Link to="/pages/aboutUs" className="hover:text-gray-600">
//             من نحن
//           </Link>
//           <Link to="/pages/contactUs" className="hover:text-gray-600">
//             تواصل معنا
//           </Link>
//         </div>

//         {/* Right Logo and Login Button */}
//         <div className="flex items-center">
//           <Link
//             to="/pages/LoginPage"
//             className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
//           >
//             تسجيل دخول
//           </Link>
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-16" /> {/* Enlarged logo */}
//           </Link>
//           {/* Added right logo and enlarged */}
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Mobile) */}
//         <div
//           className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <Link
//             to="/pages/aboutUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             من نحن
//           </Link>
//           <Link
//             to="/pages/contactUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => setIsOpen(false)}
//           >
//             تسجيل دخول
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// ///////////////////////
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md"
//       style={{
//         backgroundImage: "url('/public/navbar 1.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Side: Login Button */}
//         <div className="flex items-center">
//           <Link
//             to="/pages/LoginPage"
//             className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
//           >
//             تسجيل دخول
//           </Link>
//         </div>

//         {/* Center: Logo with Navigation Links */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-16" /> {/* Enlarged logo */}
//           </Link>
//           <div className="hidden md:flex md:items-center md:space-x-4 ml-4">
//             <Link to="/pages/aboutUs" className="hover:text-gray-600">
//               من نحن
//             </Link>
//             <Link to="/pages/contactUs" className="hover:text-gray-600">
//               تواصل معنا
//             </Link>
//           </div>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Navigation Links (Mobile) */}
//         <div
//           className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <Link
//             to="/pages/aboutUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             من نحن
//           </Link>
//           <Link
//             to="/pages/contactUs"
//             className="text-lg hover:text-gray-600"
//             onClick={() => setIsOpen(false)}
//           >
//             تواصل معنا
//           </Link>
//           <Link
//             to="/pages/LoginPage"
//             className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
//             onClick={() => setIsOpen(false)}
//           >
//             تسجيل دخول
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//////////////////
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png"; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-gray-100 text-black p-4 sticky top-0 z-50 shadow-md"
      style={{
        backgroundImage: "url('/navbar 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Login Button */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/pages/LoginPage"
            className="bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded"
          >
            تسجيل دخول
          </Link>
        </div>

        {/* Navigation Links and Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/pages/aboutUs" className="hover:text-gray-600">
            من نحن
          </Link>
          <Link to="/pages/contactUs" className="hover:text-gray-600">
            تواصل معنا
          </Link>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16" /> {/* Enlarged logo */}
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

export default Navbar;
