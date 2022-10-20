import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard/ProjectCard"

function Projects() {

  return (
    <>
      <h1>Projects</h1>

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
