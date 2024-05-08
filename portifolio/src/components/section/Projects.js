import ButtonB from "../features/ButtonB"
import styles from "../section/Projects.module.css"

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <p>cards</p>
            <ButtonB text='Acesse o meu repositório' link='https://github.com/wesleyoliveirabsb?tab=repositories'/>
        </div>
    )
}

export default Projects