// 2 - links com react router

import './NavBar.css'

import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link> */}
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/sobre" className={({isActive}) => (isActive ? 'active' : '')}>Sobre</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
// navlink é um componente do react-router-dom que permite criar links de navegação entre as páginas da aplicação. Ele é semelhante ao Link, mas possui a propriedade isActive, que indica se o link está ativo ou não. Com isso, podemos aplicar estilos diferentes para os links ativos e inativos.