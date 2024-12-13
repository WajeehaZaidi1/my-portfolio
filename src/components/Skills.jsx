import React from "react";
import { FaReact, FaPython, FaPaintBrush } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Can I Do?
          </h2>
          <p className="text-lg text-gray-600">
            I specialize in a variety of skills that enable me to build
            high-quality, responsive, and user-friendly applications. Here are
            some of the areas I am proficient in:
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-8">
          {/* Card 1 - React Frontend */}
          <div className="bg-white shadow-lg rounded-lg p-4 w-84 text-center flex items-center justify-start">
            <FaReact className="text-blue-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                React Frontend
              </h3>
              <p className="text-gray-600 text-sm">
                Build dynamic and responsive user interfaces with React.
              </p>
            </div>
          </div>

          {/* Card 2 - UI Experience */}
          <div className="bg-white shadow-lg rounded-lg p-4 w-84 text-center flex items-center justify-start">
            <FaPaintBrush className="text-purple-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                UI Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Design intuitive, modern, and user-friendly UI/UX with a focus
                on usability.
              </p>
            </div>
          </div>

          {/* Card 3 - Python Development */}
          <div className="bg-white shadow-lg rounded-lg p-4 w-84 text-center flex items-center justify-start">
            <FaPython className="text-green-600 text-4xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Python Development
              </h3>
              <p className="text-gray-600 text-sm">
                Create powerful and efficient back-end solutions using Python
                and Django.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
