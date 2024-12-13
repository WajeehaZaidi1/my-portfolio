import React from "react";
import logo from "../assets/w.png";

const Footer = () => {
  return (
    <footer className="w-full h-[30vh] bg-gray-100 py-4 flex items-center justify-center space-x-28 px-6 ">
      {/* Left Section - Logo and Name */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full" // Adjust size as needed
        />
        {/* "Wajeeha" text */}
        <div className="text-2xl font-bold text-purple-600">
          <a href="#">Wajeeha</a>
        </div>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        <a className="text-gray-600 text-sm hover:underline">Home</a>
        <a className="text-gray-600 text-sm hover:underline">About</a>
        <a className="text-gray-600 text-sm hover:underline">
          Services
        </a>
        <a className="text-gray-600 text-sm hover:underline">
          Portfolio
        </a>
        <a className="text-gray-600 text-sm hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
