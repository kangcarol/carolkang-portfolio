import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <header className={styles.NavBar}>
      <nav>
        <div>
            <h1>
                <Link
                    to='/'
                >
                    CAROL
                    <br></br>
                    KANG
                </Link>
            </h1>

            <p>
                <Link
                    to='/about'
                >
                    ABOUT
                </Link>
            </p>

            <p>
                <Link
                    to='/contact'
                >
                    CONTACT
                </Link>
            </p>
            <p>
                <Link
                    to='/resume'
                >
                    RESUME
                </Link>
            </p>
            <p>
                <Link
                    to='/projects'
                >
                    PROJECTS
                </Link>
            </p>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
