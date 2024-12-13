import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    await emailjs
      .sendForm(
        "service_6h7n0qd", // Your service ID
        "template_ftd6dxq", // Your template ID
        e.target,
        "H4tz0H1fNNF1qn9Oy" // Your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
        }
      );
    setFormData({
      name: "",
      location: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full p-4">
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 text-sm border-b border-gray-300 text-purple-800"
          />
        </div>

        {/* Location Input */}
        <div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 text-sm border-b border-gray-300 text-purple-800"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 text-sm border-b border-gray-300 text-purple-800"
          />
        </div>

        {/* Subject Input */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of the Project"
            className="w-full p-2 text-sm border-b border-gray-300 text-purple-800"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 text-sm border-b border-gray-300 text-purple-800"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="flex items-center px-4 py-1 text-sm bg-purple-500 text-white font-semibold rounded hover:bg-purple-600"
          >
            <FaPaperPlane className="mr-1 text-base" /> Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectInquiryForm;
