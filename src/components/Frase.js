import styles from './Frase.module.css'


function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>este é um componente</p>
        </div>
    )
}

export default Frase