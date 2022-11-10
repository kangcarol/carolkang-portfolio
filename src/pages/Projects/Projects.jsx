import React, { useState } from 'react';
import { projects } from "../../data/projects"
// import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from './Projects.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Projects() {
  return (
    <>
    <main>
      <article className={styles.projects}>
      {projects.map(project =>
        <>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </>
        )}
      </article>
      </main> 
    </>
  )
}

export default Projects