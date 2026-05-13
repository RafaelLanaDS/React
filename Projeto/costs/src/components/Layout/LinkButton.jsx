import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({to, text}){ 
    return(
        <Link className={styles.btn} to={to} >
            {text}
        </Link>
    )
}

export default LinkButton


// function LinkButton({to, text}) to -> indica onde o botão deve redirecionar, text -> indica o texto que deve aparecer no botão
// Link -> é um componente do react-router-dom que permite criar links de navegação entre as páginas do aplicativo
// className={styles.btn} -> aplica a classe 