import ProjectList from "../../components/ProjectList"
import { projects } from "../../data/projects"
import styles from '../Projects/Projects.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <>
    <main  className={styles.projects}>
      {/* <h1>PROJECTS</h1> */}
      {/* <section> */}
          <ProjectList projects={projects} />
      {/* </section> */}
    </main>
    </>
  )
}

export default Projects;
