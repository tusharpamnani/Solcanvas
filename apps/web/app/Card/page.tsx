import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h3 className="text-xl font-semibold p-4 border-b border-gray-200">
        {project.title}
      </h3>
      <div className="p-4">
        <img
          src={project.imageUrl}
          alt={`Project Image for ${project.title}`}
          className="w-48 h-48 object-cover mb-4" 
        />
        <p className="text-gray-700 font-medium">
          <strong>Name:</strong> {project.name}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {project.description}
        </p>
        <p className="text-gray-700 font-medium">
          <strong>Creator:</strong> {project.creator}
        </p>
        {/* <p className="text-gray-700">
          <strong>Links:</strong> {project.links.map((link, index) => (
            <span key={index} className="mr-2">{link}</span>
          ))}
        </p> */}
        <div>
          <strong>Banner Image:</strong> 
          <img
            src={project.bannerImageUrl}
            alt={`Banner Image for ${project.title}`}
            className="w-48 h-48 object-cover mb-4"
          />
        </div>
        <div>
          <strong>Logo Image:</strong> 
          <img
            src={project.logoImageUrl}
            alt={`Logo Image for ${project.title}`}
            className="w-48 h-48 object-cover mb-4"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
