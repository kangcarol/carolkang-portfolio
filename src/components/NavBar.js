import { Link } from "react-router-dom"

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
                      to='/projects'
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
