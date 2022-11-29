import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const ProjectPreview = (props) => {
  const path = hyphenateWords(props.projectTitle)

  return (
    <>
      <section id="project">
        <img src={props.projectImage} alt={props.projectTitle} />
          <article>
            <p>{props.projectDescription}</p>
            <Link to={`/projects/${path}`}><span><FontAwesomeIcon icon={faMagnifyingGlass} />    Learn More</span></Link>
          </article>
      </section>
    </>
  )
}

export default ProjectPreview