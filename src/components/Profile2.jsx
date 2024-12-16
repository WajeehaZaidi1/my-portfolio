import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Profile2 = ({ openModal }) => {
  return (
    <section className="w-full h-10 flex items-center justify-center bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200">
      <div className="w-3/4 md:w-1/2 p-10 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Image and Icons */}
        <div className="w-full md:w-1/3 bg-gray-100 p-4 flex flex-col items-center">
          {/* Picture */}
          <img
            src="/assets/wajeeha.jpg" // Replace with your image URL
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 animate-spin"
          />
          {/* Icon Buttons */}
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="https://github.com/WajeehaZaidi1" // Replace with your Facebook profile link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black text-white rounded-full hover:bg-grey-600"
            >
              <FaGithub />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/wajeha_zaidi1/" // Replace with your Instagram profile link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
            >
              <FaInstagram />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wajeeha-batool-9ab082231/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section - Text and Resume Button */}
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
          {/* Dummy Paragraph */}
          <p className="text-gray-700 text-lg mb-6">
            I am a skilled developer with expertise in modern web technologies.
            I specialize in creating user-friendly, responsive designs and
            building efficient back-end solutions to enhance user experiences.
          </p>
          {/* Resume Button */}
          <div>
            <button
              onClick={openModal}
              className="px-6 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile2;
