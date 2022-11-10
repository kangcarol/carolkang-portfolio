import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      <h2>Project List</h2>
      {props.projects.map(project =>
        <ul key={project.title}>
          <ProjectPreview
            projectTitle={project.title}
            projectImage={project.image}
          />
        </ul>
      )}
    </>
  )
}

export default ProjectList
