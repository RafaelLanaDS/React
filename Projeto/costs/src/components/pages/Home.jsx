import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home(){
    return(
        <>
            <section className={styles.home_container}>
                <h1>Bem-Vindo ao <span>Cost</span></h1>
                <p>Comece a gerenciar seus custos de forma eficiente!</p>
                <a href="">Criar Projeto</a>
                <img src={savings} alt="Economia" />
            </section>
        </>
    )
}

export default Home 