import { useParams, Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
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

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.image}
              alt={project.title}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={project.image2} 
              alt={project.title}
            />
          </Carousel.Item>
        </Carousel>

          <p>{project.description}</p>
          <ul>
            <li><a href={project.repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Code</a></li>
            <span></span>
            <li><a href={project.deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View</a></li>
            <li><Link to='/projects'> Other Projects</Link></li>
          </ul>
        </section>
      </main> 
    </>
  )
}

export default ProjectDetail