import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img height='300' src={project.image} alt=""/>
      <button >Learn More</button>
      <button >View App</button>
    </>
  );
}

export default ProjectCard;