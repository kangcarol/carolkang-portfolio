import React, { useState } from 'react';
import { projects } from "../../data/projects"
// import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from './ProjectList.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectList() {
  return (
    <>
    <main>
      <article className={styles.projectList}>
      {projects.map((project, idx) =>
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

export default ProjectList