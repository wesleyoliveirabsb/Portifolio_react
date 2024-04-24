import styles from './Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import css from '../../images/skills/css.svg'
import html from '../../images/skills/html.svg'
import typescript from '../../images/skills/typescript.svg'
import react from '../../images/skills/react.svg'

function Skills(){
    return(
        <div className={styles.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minahs habildiades e conhecimentos</p>
            <div>
                <img src={html} alt='html logo'></img>
                <img src={css} alt='css logo'></img>
                <img src={javascript} alt='javacript logo'></img>
                <img src={react} alt='react logo'></img>
                <img src={typescript} alt='typescript logo'></img>
            </div>
        </div>
    )
}

export default Skills