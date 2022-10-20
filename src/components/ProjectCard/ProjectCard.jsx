import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <>
      <h2>{project.title}</h2>
      <img height='300' src={project.image} alt=""/>
    </>
  );
}

export default ProjectCard;