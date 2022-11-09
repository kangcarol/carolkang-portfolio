import styles from './Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faSquareJs, faHtml5, faCss3Alt  } from '@fortawesome/free-brands-svg-icons'



function Resume() {
  return (
    <>
      <main className={styles.resume}>
        <section>
        <h1>Experience & Skills</h1>
        <section>
          <a href="/Carol_Kang_Resume_2022.pdf" target="_blank" rel="noreferrer" alt="Carol Kang resume">
            <div className={styles.resume}>
              <p><FontAwesomeIcon icon={faEnvelope}/></p>
              <p>CV</p>
            </div>
          </a>

        <h2>TOOL BOX</h2>
        <ul>
          <li><FontAwesomeIcon icon={faReact} /></li>
          <li><FontAwesomeIcon icon={faSquareJs} /></li>
          <li><FontAwesomeIcon icon={faHtml5} /></li>
          <li><FontAwesomeIcon icon={faCss3Alt} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
        </ul>      
        </section>

        </section>
      </main>
    </>
  )
}

export default Resume
