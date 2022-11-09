import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <header>
      <nav>
          <Link
              to='/'
          >
              CAROL KANG
          </Link>

          <ul>
              <li>
                  <Link
                      to='/about'
                  >
                      ABOUT
                  </Link>
              </li>

              <li>
                  <Link
                      to='/contact'
                  >
                      CONTACT
                  </Link>
              </li>
              <li>
                  <Link
                      to='/resume'
                  >
                      RESUME
                  </Link>
              </li>
              <li>
                  <Link
                      to='/projectlist'
                  >
                      PROJECTS
                  </Link>
              </li>
          </ul>
      </nav>
    </header>
  )
}

export default NavBar
