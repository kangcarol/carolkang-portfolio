import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <>
      <article className={styles.ProjectCard}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt=""/>
        <div>
          <ul>
            <li><a href={project.repositoryLink} target="_blank" rel="noreferrer">Learn More</a></li>
            <span></span>
            <li><a href={project.deploymentLink} target="_blank" rel="noreferrer">View App</a></li>
          </ul>
        </div>
      </article>
    </>
  );
}

export default ProjectCard