import hyphenateWords from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.projectTitle)
  return (
    <>
      <article>
      <Link to={`/projects/${path}`}>
        <h4><FontAwesomeIcon icon={faMagnifyingGlass} /> {props.projectTitle}</h4>
        <p>{props.projectDescription}</p>
        {/* <img src={props.projectImage} alt={props.projectTitle} /> */}
        {/* <div>
          <Link to={`/projects/${path}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Learn More
          </Link>
        </div> */}
      </Link>
      </article>
    </>
  )
}

export default ProjectPreview


        
{/* <a href={props.project.deploymentLink} target="_blank" rel="noreferrer"><img src={props.project.image} alt={props.roject.title}/></a>
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
} */}