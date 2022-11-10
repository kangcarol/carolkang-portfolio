import React, { useState } from 'react';
import { projects } from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from './Project.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-bootstrap';

function ProjectDetail() {
  return (
    <>
      <main>
        <section>
          <h1>PROJECTS</h1>
          {projects.map((project, idx) =>
              <ProjectCard
                key={idx}
                idx={idx}
                project={project}
                />
              )}
        </section>
      </main>
    </>
  )
}

export default ProjectDetail
