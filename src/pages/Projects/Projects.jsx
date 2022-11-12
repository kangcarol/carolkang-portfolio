import ProjectList from "../../components/ProjectList"
import { projects } from "../../data/projects"
import styles from '../Projects/Projects.module.css'


const Projects = () => {
  return (
    <>
    <main>
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
