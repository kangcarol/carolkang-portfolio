import { Link, useLocation } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
    
    const location = useLocation()

    return (
    <header >
        <nav className={styles.NavBar}>
            <ul>
                {(location.pathname ==='/') ? '' :
                    <>
                        <li><Link to='/'>CAROL KANG</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        {/* <li><Link to='/experience'>EXPERIENCE</Link></li> */}
                        <li><Link to='/projects'>PROJECTS</Link></li> 
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </>
                }
            </ul>
        </nav>
    </header>
    )
}

export default NavBar
