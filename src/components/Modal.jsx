// src/components/Modal.jsx

import React from "react";

const Modal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-purple-300 rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <button
            onClick={onClose}
            className="text-xl font-semibold  text-gray-100 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-100 bg-purple-600 p-6 rounded-md font-extrabold">
            {project.description}
          </p>
        </div>
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black"
          >
            View Source Code (GitHub)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
