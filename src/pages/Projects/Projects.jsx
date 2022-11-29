import ProjectList from "../../components/ProjectList"
import { projects } from "../../data/projects"
import styles from '../Projects/Projects.module.css'

const Projects = () => {
  return (
    <>
    <main  className={styles.projects}>
      <ProjectList projects={projects} />
    </main>
    </>
  )
}

export default Projects;
