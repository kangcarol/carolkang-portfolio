import { projects } from "../../data/projects"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import styles from './Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap';

function Projects() {

  return (
    <>
      <main>
        <section>
          <h1>PROJECTS</h1>

          <Carousel>
          {/* {projects.map((project, idx) =>
              <ProjectCard
                key={idx}
                idx={idx}
                project={project}
                />
              )} */}
          <Carousel.Item>
            <a href={projects[0].deploymentLink} target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src={projects[0].image}
                alt={projects[0].title}
              />
              </a>
            <Carousel.Caption>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].description}</p>
              <div>
                <ul>
                  <li><a href={projects[0].repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
                  <span></span>
                  <li><a href={projects[0].deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
                </ul>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href={projects[1].deploymentLink} target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src={projects[1].image}
                alt={projects[1].title}
              />
              </a>
            <Carousel.Caption>
              <h3>{projects[1].title}</h3>
              <p>{projects[1].description}</p>
              <div>
                <ul>
                  <li><a href={projects[1].repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
                  <span></span>
                  <li><a href={projects[1].deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
                </ul>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a href={projects[2].deploymentLink} target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src={projects[2].image}
                alt={projects[2].title}
              />
              </a>
            <Carousel.Caption>
              <h3>{projects[2].title}</h3>
              <p>{projects[2].description}</p>
              <div>
                <ul>
                  <li><a href={projects[2].repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
                  <span></span>
                  <li><a href={projects[2].deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
                </ul>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
{/* 
          <Carousel.Item>
            <a href={projects[0].deploymentLink} target="_blank" rel="noreferrer">
              <img
                className="d-block w-100"
                src={projects[0].image}
                alt={projects[0].title}
              />
              </a>
            <Carousel.Caption>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].description}</p>
              <div>
                <ul>
                  <li><a href={projects[0].repositoryLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> Learn More</a></li>
                  <span></span>
                  <li><a href={projects[0].deploymentLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMagnifyingGlass} /> View Here</a></li>
                </ul>
              </div>
            </Carousel.Caption>
          </Carousel.Item> */}

          </Carousel>
        </section>
      </main>
    </>
  )
}

export default Projects
