import ProjectList from "../../components/ProjectList"
import { projects } from "../../data/projects"
import styles from '../Projects/Projects.module.css'


const Projects = () => {
  return (
    <>
      <section className={styles.projects}>
        <h2>Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </>
  )
}

export default Projects;
