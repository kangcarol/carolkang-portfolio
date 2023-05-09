import styles from './About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <>
      <main className={styles.about}>
        <section>
          <img 
            src='./carolkang.jpeg'
            alt="ckang"
            className="self-img" 
          />
        <div>
          <p id="brand-statement">I am a software developer, who believes creativity and analytical thinking go hand in hand when solving problems. Through my business operations experience at startups and larger corporations, I’ve managed projects with cross functional teams and stayed attuned to stakeholder and customer priorities.  My approach derives from a foundation in the arts, where details, imagination, concept and message matters.
          </p>

          <article>
            <a href="/Carol_Kang_Resume.pdf" target="_blank" rel="noreferrer" alt="Carol Kang resume">
              <span className={styles.resume}>
                <h2><FontAwesomeIcon icon={faFile}/></h2>
                <h2>CV</h2>
              </span>
            </a>

            <a href="https://github.com/kangcarol" target="_blank" rel="noreferrer" alt="Carol Kang Github">
              <span className={styles.contact}>
                <h2><FontAwesomeIcon icon={faGithub}/></h2>
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
                  <li>NodeJS</li>
                  <li>Django</li>
                  <li>Docker</li>
                  <li>PostgreSQL</li>
                  <li>Python</li>
                  <li>Bootstrap</li>
                </ul>
            </details>
          </article>

          </div>
        </section>
      </main>
    </>
  )
}

export default About
