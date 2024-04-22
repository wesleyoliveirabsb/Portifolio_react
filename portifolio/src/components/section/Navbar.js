import styles from './Navbar.module.css'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';


function navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><NavLink href='#Skills'>Habilidades</NavLink></li>
                <li><NavLink href='#Projects'>Projetos</NavLink></li>
            </ul>
            <ul>
                <li><a href='https://github.com/wesleyoliveirabsb'><FaGithub size={40}/></a></li>
                <li><a href='https://www.linkedin.com/in/wesleyoliveirabsb/'><FaLinkedin size={40}/></a></li>
            </ul>
        </div>
    )
}

export default navbar