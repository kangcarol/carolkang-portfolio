import styles from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <>
      <main className={styles.about}>
        <section>
          {/* <h1>ABOUT</h1> */}
          <div>
          <img 
            src='./carolkang.jpeg'
            alt="carol-kang"
            className="self-img" 
          />
          <p id="brand-statement">I am a software developer, who believes creativity and analytical thinking go hand in hand when solving problems. Through my business operations experience at startups and larger corporations, I’ve managed projects with cross functional teams and stayed attuned to stakeholder and customer priorities.  My approach derives from a foundation in the arts, where details, imagination, concept and message matters.
          </p>
          </div>

          <article>
            <a href="/Carol_Kang_Resume_2022.pdf" target="_blank" rel="noreferrer" alt="Carol Kang resume">
              <span className={styles.resume}>
                <p><FontAwesomeIcon icon={faEnvelope}/></p>
                <h2>CV</h2>
              </span>
            </a>

            <a href="https://github.com/kangcarol" target="_blank" rel="noreferrer" alt="Carol Kang Github">
              <span className={styles.contact}>
                <p><FontAwesomeIcon icon={faGithub}/></p>
                <h2>GitHub</h2>
              </span>
            </a>

              <details className='toolbox'>
                <summary>TOOL BOX</summary>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                  </ul>
            </details>
          </article>
        </section>
      </main>
    </>
  )
}

export default About
