import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { Link } from 'react-router-dom'
import LinkButton from '../Layout/LinkButton'

function Home(){
    return(
        <>
            <section className={styles.home_container}>
                <h1>Bem-Vindo ao <span>Cost</span></h1>
                <p>Comece a gerenciar seus custos de forma eficiente!</p>
                <LinkButton to="/NewProject" text="Criar Projeto" />  
                <img src={savings} alt="Economia" />
            </section>
        </>
    )
}

export default Home 