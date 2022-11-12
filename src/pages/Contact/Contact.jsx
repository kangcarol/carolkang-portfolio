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
          <h1>CONTACT INFO</h1>
          <h6>Please reach out if you'd like to work together!</h6>

          <article>

            {/* <div> */}
              <a href="mailto:carolkang@me.com" target="_blank" rel="noreferrer" alt="Carol Kang email">
                <span className={styles.contact}>
                  <p><FontAwesomeIcon icon={faEnvelope}/></p>
                  <p>Email</p>
                </span>
              </a>
              {/* </div>

              <div> */}
                <a href="https://www.linkedin.com/in/kang-carol/" target="_blank" rel="noreferrer" alt="Carol Kang LinkedIn">
                  <span className={styles.contact}>
                    <p><FontAwesomeIcon icon={faLinkedin}/></p>
                    <p>LinkedIn</p>
                  </span>
                </a>
            {/* </div> */}

          </article>
        </section>
      </main>
    </>
  )
}

export default Contact
