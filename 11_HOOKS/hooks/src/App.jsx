import './App.css'

import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom'

import {HookUseContext} from './components/HookUseContext'

//pages
import Home from './Pages/Home'
import Abaut from './Pages/Abaut'

function App() {

  return (
    <div className='App'>
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/abaut'>Abaut</Link>
          </nav>
          <hr />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/abaut' element={<Abaut/>}/>
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

export default App
