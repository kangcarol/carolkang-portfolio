import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img height='300' src={project.image} alt=""/>
      <ul>
        <li><a href={project.repositoryLink} target="_blank" rel="noreferrer">Learn More</a></li>
        <li><a href={project.deploymentLink} target="_blank" rel="noreferrer">View App</a></li>
      </ul>
    </>
  );
}

export default ProjectCard;