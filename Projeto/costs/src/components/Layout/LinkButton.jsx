import styles from './LinkButton.module.css'

function LinkButton({to, text}){ 
    return(
        <Link to={to} className={styles.btn}>
            {text}
        </Link>
    )
}

export default LinkButton


// function LinkButton({to, text}) to e text são as props que serão passadas para o componente LinkButton, onde to é a rota para a qual o botão irá redirecionar e text é o texto que será exibido no botão. O componente Link é importado do react-router-dom e é usado para criar um link de navegação. A classe CSS btn é aplicada ao Link para estilizar o botão.