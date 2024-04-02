import styles from './Navbar.module.css'
import { FaLinkedin,FaGithub } from "react-icons/fa";


function navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>
            <ul>
                <li><FaGithub size={40}/></li>
                <li><FaLinkedin size={40}/></li>
            </ul>
        </div>
    )
}

export default navbar