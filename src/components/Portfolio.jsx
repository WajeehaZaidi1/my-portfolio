// src/components/Portfolio.jsx

import React, { useState } from "react";
import { projects } from "../data"; // Import the data
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import Modal from "./Modal"; // Import the Modal component
import Container from "./Container";

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of visible projects
  const [isShowingAll, setIsShowingAll] = useState(false); // Track if all projects are shown
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project for the modal

  // Handle the "Show More" button click
  const loadMoreProjects = () => {
    if (visibleProjects < projects.length) {
      setVisibleProjects((prev) => prev + 3); // Show 3 more projects each time
    }
  };

  // Handle the "Show Less" button click
  const loadLessProjects = () => {
    if (visibleProjects > 3) {
      setVisibleProjects((prev) => prev - 3); // Hide 3 projects each time
    }
  };

  // Handle toggling between showing all and fewer projects
  const toggleProjects = () => {
    if (isShowingAll) {
      setVisibleProjects(3); // Show only 3 projects
    } else {
      setVisibleProjects(projects.length); // Show all projects
    }
    setIsShowingAll(!isShowingAll); // Toggle the state
  };

  // Open the modal with the selected project
  const openModal = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project); // Set the selected project in state
  };

  // Close the modal
  const closeModal = () => {
    setSelectedProject(null); // Reset the selected project to null
  };

  return (
    <section className="w-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 py-16">
      {/* Heading */}
      <Container>  <div>
    <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
        <p className="text-gray-600 mt-4">
          Check out some of my projects below.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      {/* More Projects or Show Less Button */}
      <div className="flex justify-center mt-8">
        {visibleProjects < projects.length && (
          <button
            onClick={loadMoreProjects}
            className="rounded-md bg-purple-600 py-2 px-6 text-white text-lg font-semibold hover:bg-purple-700"
          >
            More Projects
          </button>
        )}

        {isShowingAll && (
          <button
            onClick={toggleProjects}
            className="rounded-md bg-gray-300 py-2 px-6 text-gray-800 text-lg font-semibold hover:bg-gray-400 ml-4"
          >
            Show Less
          </button>
        )}
      </div>
</div></Container>
      {/* Show Modal if a project is selected */}
      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default Portfolio;
