import styles from './Resume.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser,faEnvelope, faFile, faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faSquareJs, faHtml5, faCss3Alt  } from '@fortawesome/free-brands-svg-icons'



function Resume() {
  return (
    <>
      <main className={styles.resume}>
        <section>
        <h1>RESUME</h1>

        <h4>Click to download <a href="/Carol_Kang_Resume_2022.pdf" target="_blank" rel="noreferrer">my resume</a></h4>

        <h1>TOOL BOX</h1>
          <div className={styles.resume}>          
            <p><FontAwesomeIcon icon={faReact} /></p>
            <p><FontAwesomeIcon icon={faSquareJs} /></p>
            <p><FontAwesomeIcon icon={faHtml5} /></p>
            <p><FontAwesomeIcon icon={faCss3Alt} /></p>
            <p><FontAwesomeIcon icon={faGithub} /></p>
          </div>

        </section>
      </main>
    </>
  )
}

export default Resume
