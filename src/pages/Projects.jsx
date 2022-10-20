import { projects } from "../data/projects"

function Projects() {

  return (
    <>
      <h1>Projects</h1>
      <ul>
			{projects.map((project, idx) =>
				<li>
          <Projects
            key={idx}
            idx={idx}
            projectTitle={project.title}
				  />
        </li>
			)}
      </ul>
    </>
  )
}

export default Projects
