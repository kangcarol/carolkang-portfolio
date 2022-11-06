import styles from './About.module.css'

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
            height='300'
          />
          <p id="brand-statement">I am a software developer, who believes creativity and analytical thinking go hand in hand when solving problems. Through my business operations experience at startups and larger corporations, I’ve managed projects with cross functional teams and stayed attuned to stakeholder and customer priorities.  My approach derives from a foundation in the arts, where details, imagination, concept and message matters.
          </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default About
