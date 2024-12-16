import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the AOS CSS

const Profile = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations

    // Reinitialize AOS animations on every re-render (e.g., when component reappears)
    AOS.refresh();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <section className="w-full max-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 ">
      
      <div className="flex flex-col w-[80%] md:flex-row items-center justify-between px-8 py-20 ">
        {/* Left Side - Text Content with AOS animation */}
        <div
          className="max-w-[70%]"
          data-aos="zoom-out-left" // AOS animation on this div
        >
          <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hello, I am Wajeeha
            </h1>
            <p className="text-lg text-gray-700 text-start">
              I am a passionate developer with experience in front-end and
              back-end technologies. I love building beautiful, responsive
              websites and learning new technologies to stay on top of the
              trends.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[30%] justify-end ml-auto text-center md:ml-8">
          <img
            src="/assets/wajeeha.jpg" // Replace with your image URL
            alt="Wajeeha"
            className="rounded-md w-48 h-58 object-cover shadow-lg flex hover:scale-125 transform-all ease-linear duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
