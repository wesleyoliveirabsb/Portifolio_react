import styles from './Presentation.module.css'
import ButtonA from '../features/ButtonA'
import ButtonB from '../features/ButtonB'
function Presentation(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h2><strong>Bem vindo ao meu portfólio</strong></h2>
            <h1>Olá eu sou Wesley!</h1>
            <p>Sou apaixonado por tecnologias e soluções inovadoras. <br/>
            Como desenvolvedor front end eu tenho objetivo de criar sites criativos e intuitivos <br/>
            tornando assim mais prático e divertido a navegação na internet. <br/>
            Atualmente focando no futuro e sempre em busca de novos desafiops.</p>

            <ButtonA link = 'https://www.linkedin.com/in/wesleyoliveirabsb/'text='Conecte-se Comigo!'/>
            <ButtonB text='Botão B'/>
        </div>
    )
}

export default Presentation