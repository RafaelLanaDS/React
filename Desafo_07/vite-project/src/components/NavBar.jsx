// 2 - links com react router

import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </div>
  )
}

export default NavBar
