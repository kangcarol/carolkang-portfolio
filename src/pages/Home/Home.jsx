import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faFile, faMagnifyingGlass, faCode} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faSquareJs, faHtml5, faCss3Alt  } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
      <main className={styles.home}>
        <section>
          <h1>CAROL KANG</h1>
          <h2>software engineer</h2>
          {/* <img
            src='./carolkang.jpeg'
            alt="carol-kang"
            // className={styles.self-img}
            height='300' 
            /> */}
          {/* <ul>
            <li><FontAwesomeIcon icon={faUser} /></li>
            <li><FontAwesomeIcon icon={faEnvelope} /></li>
            <li><FontAwesomeIcon icon={faFile} /></li>
            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li><FontAwesomeIcon icon={faCode} /></li>
          </ul> */}
        </section>
      </main>
    </>
  )
}

export default Home
