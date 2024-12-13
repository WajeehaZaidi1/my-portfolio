import React from "react";
import logo from "../assets/w.png";

const Navbar = ({ openModal }) => {
  return (
    <nav className="bg-white text-purple-800 font-bold p-4 top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <div className="text-2xl font-bold">
            <a href="#">Wajeeha</a>
          </div>
        </div>

        <div className="space-x-6 flex items-center">
          <a href="#about" className="hover:text-gray-400 text-purple-800">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 text-purple-800">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 text-purple-800">
            Contact
          </a>
          <button
            onClick={openModal} // Trigger modal when clicked
            className="hover:text-white hover:scale-110 rounded-md p-1 bg-purple-700 text-white"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
