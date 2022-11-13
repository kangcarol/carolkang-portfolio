// import { Link } from "react-router-dom"
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <>
      <main className={styles.contact}>
        <section>
          <h1>CONTACT INFO</h1>
          <h6>Please reach out if you'd like to work together!</h6>

          <article>

              <a href="mailto:carolkang@me.com" target="_blank" rel="noreferrer" alt="Carol Kang email">
                <span>
                  <p><FontAwesomeIcon icon={faEnvelope}/></p>
                  <p>Email</p>
                </span>
              </a>

                <a href="https://www.linkedin.com/in/kang-carol/" target="_blank" rel="noreferrer" alt="Carol Kang LinkedIn">
                  <span>
                    <p><FontAwesomeIcon icon={faLinkedin}/></p>
                    <p>LinkedIn</p>
                  </span>
                </a>

          </article>
        </section>
      </main>
    </>
  )
}

export default Contact
