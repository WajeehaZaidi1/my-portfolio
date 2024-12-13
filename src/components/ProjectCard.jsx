// src/components/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg">
      <div className="relative h-40 m-2 overflow-hidden text-white rounded-md">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-lg font-semibold">
          {project.name}
        </h6>
        <p className="text-slate-600 leading-normal text-sm font-light">
          {project.description.substring(0, 100)}...
        </p>
      </div>
      <div className="px-4 pb-4 pt-0">
        <button
          onClick={() => openModal(project.id)}
          className="rounded-md bg-purple-600 py-2 px-4 text-sm text-white hover:bg-purple-700"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
