import './App.css'

import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Abaut from './Pages/Abaut'

function App() {

  return (
    <div className='App'>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/abaut'>Abaut</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/abaut' element={<Abaut/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
