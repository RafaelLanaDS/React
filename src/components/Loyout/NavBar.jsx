import { Link } from 'react-router-dom';//Importa o componente Link para criar links de navegação
import styles from './NavBar.module.css'; //Importa os estilos para o NavBar

function NavBar() {
    return(
        <>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
                <li className={styles.item}><Link to="/contato">Contato</Link></li>
            </ul>
        </>
    )
}
export default NavBar