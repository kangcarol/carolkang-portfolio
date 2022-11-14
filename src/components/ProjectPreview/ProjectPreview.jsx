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
          <Link to={`/projects/${path}`}>
            <h4><FontAwesomeIcon icon={faMagnifyingGlass} /> {props.projectTitle}</h4>
          </Link>
          <p>{props.projectDescription}</p>
        </div>
      </article>
    </>
  )
}

export default ProjectPreview