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
          <article>
            <a href="/Carol_Kang_Resume_2022.pdf" target="_blank" rel="noreferrer" alt="Carol Kang resume">
              <div className={styles.resume}>
                <p><FontAwesomeIcon icon={faEnvelope}/></p>
                <h2>CV</h2>
              </div>
            </a>
            {/* <div> */}
              <a href="https://github.com/kangcarol" target="_blank" rel="noreferrer" alt="Carol Kang Github">
                <div className={styles.contact}>
                  <p><FontAwesomeIcon icon={faGithub}/></p>
                  <h2>GitHub</h2>
              </div>
              </a>
            {/* </div> */}

            <h2>TOOL BOX</h2>
            <div>
              <p className={styles.icons}><FontAwesomeIcon icon={faReact} /></p>
              <p className={styles.icons}><FontAwesomeIcon icon={faSquareJs} /></p>
              <p><FontAwesomeIcon icon={faHtml5} /></p>
              <p><FontAwesomeIcon icon={faCss3Alt} /></p>
              <p><FontAwesomeIcon icon={faGithub} /></p>
            </div>
            <div>
              <ul>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </div>   

          </article>
        </section>
      </main>
    </>
  )
}

export default Resume
