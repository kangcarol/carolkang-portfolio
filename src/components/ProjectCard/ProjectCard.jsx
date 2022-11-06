import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <>
      <article className={styles.ProjectCard}>
        <h2>{project.title}</h2>
        <a href={project.deploymentLink} target="_blank" rel="noreferrer"><img src={project.image} alt=""/></a>
        <p>{project.description}</p>
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
{/* <>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</> */}