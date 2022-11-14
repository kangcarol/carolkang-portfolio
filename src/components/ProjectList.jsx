import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      {props.projects.map((project, idx) =>
          <ProjectPreview
            projectImage={project.image}
            projectTitle={project.title}
            projectDescription={project.description}
            key={idx}
          />
      )}
    </>
  )
}

export default ProjectList
