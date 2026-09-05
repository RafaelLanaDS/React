import './App.css'
import './Hooks.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {HookUseContext} from './components/HookUseContext'

//pages
import Home from './Pages/Home'
import Abaut from './Pages/Abaut'

function App() {

  return (
    <div className='App'>
      <HookUseContext>
        <BrowserRouter>
          <header className='app-header'>
            <div className='app-brand'>
              <span className='app-mark' aria-hidden='true'>R</span>
              <div>
                <p className='app-eyebrow'>Estudos práticos</p>
                <h1>React Hooks</h1>
              </div>
            </div>
            <nav className='app-nav' aria-label='Navegação principal'>
              <Link className='app-nav-link' to='/'>Home</Link>
              <Link className='app-nav-link' to='/abaut'>Sobre</Link>
            </nav>
          </header>
          <main className='app-main'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/abaut' element={<Abaut/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

export default App
