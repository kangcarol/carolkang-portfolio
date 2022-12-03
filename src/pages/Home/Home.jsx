import styles from './Home.module.css'
import { Link, useLocation } from "react-router-dom"

function Home() {
  const location = useLocation()
  return (
    <>
      <main className={styles.home}>
        <section>
          <img src="/carolkang-portfolio-logo.png" alt="Carol Kang logo" className={styles.standard}/>
          <img src="/carolkang-portfolio-logo-mobile.png" alt="Carol Kang logo" className={styles.mobile}/>
          <div>
            <Link to='/about'>ABOUT</Link>
            <Link to='/projects'>PROJECTS</Link>
            <Link to='/contact'>CONTACT</Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
