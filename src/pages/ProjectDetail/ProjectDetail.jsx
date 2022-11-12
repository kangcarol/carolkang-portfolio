import { useParams, Link } from "react-router-dom"
import findProject from "../../utilities/findProject"
import styles from './ProjectDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'

const ProjectDetail = () => {
  const { projectDetail }= useParams()
  const project = findProject(projectDetail)

  return (
    <>
      <main>
        <section className={styles.ProjectDetail}>
          {/* <h2>{project.title}</h2> */}
          <img src={project.image} alt={project.title}/>
          <p>{project.description}</p>
            
          {/* <span> */}
            <ul>
              <li><a href={project.repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Code</a></li>
              <span></span>
              <li><a href={project.deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View</a></li>
              <li><Link to='/projects'> Other Projects</Link></li>
            </ul>
          {/* </span> */}

        </section>
      </main> 
    </>
  )
}

export default ProjectDetail
