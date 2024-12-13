import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing icons
import { contactCardsData } from "../data.js";
import ContactCard from "./ContactCard"; // Importing ContactCard component
import ProjectInquiryForm from "./ProjectInquiryForm.JSX";

const ProjectDiscussion = () => {
  console.log(contactCardsData);
  return (
    <section className="w-full h-auto flex items-center justify-center p-8  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-4/5 md:w-3/5 m-28 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Cards */}
        <div className="w-full md:w-1/2 p-4 flex flex-col space-y-3">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
            Let's Discuss the Project
          </h2>

          {contactCardsData.map((detail, index) => (
            <ContactCard
              key={index}
              Icon={detail.icon}
              title={detail.title}
              description={detail.description}
              iconColor={detail.iconColor}
            />
          ))}
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            Project Inquiry
          </h2>

          <div className="space-y-4">
            <ProjectInquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDiscussion;
