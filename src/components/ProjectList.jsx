import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      {props.projects.map((project, idx) =>
          <ProjectPreview
            projectTitle={project.title}
            projectDescription={project.description}
            // projectImage={project.image}
            key={idx}
          />
      )}
    </>
  )
}

export default ProjectList
