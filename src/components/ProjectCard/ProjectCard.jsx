import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <>
      <article className={styles.ProjectCard}>
        <h2>{project.title}</h2>
        <a href={project.deploymentLink} target="_blank" rel="noreferrer"><img src={project.image} alt=""/></a>
        <p>{project.description}</p>
        <div>
          <ul>
            <li><a href={project.repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
            <span></span>
            <li><a href={project.deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default ProjectCard