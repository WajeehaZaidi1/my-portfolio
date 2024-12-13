import React from "react";

const ResumeModal = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">My Resume</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
        </div>

        {/* Resume Content */}
        <iframe
          src={resumeUrl}
          title="Resume"
          className="w-full h-64 border rounded-md"
        ></iframe>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <a
            href={resumeUrl}
            download
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
