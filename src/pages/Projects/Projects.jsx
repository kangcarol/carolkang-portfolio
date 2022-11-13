import ProjectList from "../../components/ProjectList"
import { projects } from "../../data/projects"
import styles from '../Projects/Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <>
    <main  className={styles.projects}>
      <section>
        {/* <h2 className={styles.projects}>Projects</h2> */}
        {/* <section className={styles.projects}> */}
          <ProjectList projects={projects} />
        {/* </section> */}
      </section>
    </main>
    </>
  )
}

export default Projects;
