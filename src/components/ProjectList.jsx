import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      {props.projects.map((project, idx) =>
          <ProjectPreview
            projectTitle={project.title}
            projectImage={project.image}
            key={idx}
          />
      )}
    </>
  )
}

export default ProjectList
