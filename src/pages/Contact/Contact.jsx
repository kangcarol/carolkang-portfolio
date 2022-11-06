import { Link } from "react-router-dom"
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faFile, faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faSquareJs, faHtml5, faCss3Alt  } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <>
      <main className={styles.contact}>
        <section>
          <h1>CONTACT</h1>
          <h2>Reach out if you'd like to work together!</h2>
          <div>
            <ul>
              <li><a href="mailto:carolkang@me.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/kang-carol/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/kangcarol" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><FontAwesomeIcon icon={faUser} /></li>
              <li><FontAwesomeIcon icon={faEnvelope} /></li>
              <li><FontAwesomeIcon icon={faFile} /></li>
              <li><FontAwesomeIcon icon={faGithub} /></li>
              <li><FontAwesomeIcon icon={faLinkedin} /></li>
              <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
              <li><FontAwesomeIcon icon={faCode} /></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
