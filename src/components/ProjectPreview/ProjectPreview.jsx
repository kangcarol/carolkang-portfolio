import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const ProjectPreview = (props) => {
  const path = hyphenateWords(props.projectTitle)

  return (
    <>
      <div id="project">
        <Link to={`/projects/${path}`}><img src={props.projectImage} alt={props.projectTitle} />
          <span><FontAwesomeIcon icon={faMagnifyingGlass} />    Learn More</span>
        </Link>
      </div>
    </>
  )
}

export default ProjectPreview