import { projects } from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from './Projects.module.css'

function Projects() {

  return (
    <>
      <h1>PROJECTS</h1>

			{projects.map((project, idx) =>
        <ProjectCard
          key={idx}
          idx={idx}
          project={project}
          />
			)}

    </>
  )
}

export default Projects
