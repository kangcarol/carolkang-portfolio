import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
// import { Carousel } from 'react-bootstrap';
import hyphenateWords from "../../utilities/hyphenateWords"

const ProjectCard = (props) => {
  const path = hyphenateWords(props.projectTitle)
  return (
    <>
      <article className={styles.ProjectCard}>
        <Link to={`/projects/${path}`}>
          <h2>{props.project.title}</h2>
        </Link>
        <a href={props.project.deploymentLink} target="_blank" rel="noreferrer"><img src={props.project.image} alt={props.roject.title}/></a>
        <p>{props.project.description}</p>
        <div>
          <ul>
            <li><a href={props.project.repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
            <span></span>
            <li><a href={props.project.deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default ProjectCard