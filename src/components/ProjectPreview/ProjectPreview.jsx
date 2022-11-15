import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.projectTitle)
  return (
    <>
      <article>
        <img src={props.projectImage} alt={props.projectTitle} />
        <div>
          <h4>{props.projectTitle}</h4>
          <p>{props.projectDescription}</p>
          
          <p><Link to={`/projects/${path}`}><FontAwesomeIcon icon={faMagnifyingGlass} />    Learn More</Link></p>
          
        </div>
      </article>
    </>
  )
}

export default ProjectPreview