import { useParams } from "react-router-dom"
import findProject from "../../utilities/findProject"

import styles from './ProjectDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'

const ProjectDetail = () => {
  const { projectDetail }= useParams()
  const project = findProject(projectDetail)
  console.log("projectDetail", project)

  return (
    <>
    <main>
      <article className={styles.ProjectDetail}>
          <h2>{project.title}</h2>
          <a href={project.deploymentLink} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.title}/>
          </a>
          <p>{project.description}</p>
          <div>
            <ul>
              <li><a href={project.repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
              <span></span>
              <li><a href={project.deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
            </ul>
          </div>

        </article>
      </main> 
    </>
  )
}

export default ProjectDetail
