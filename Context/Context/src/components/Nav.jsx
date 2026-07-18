import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Home
      </NavLink>
      <NavLink
        to="/Sobre"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Sobre
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Products
      </NavLink>
    </nav>
  )
}

export default Nav
