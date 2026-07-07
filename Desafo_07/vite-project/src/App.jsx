import './App.css'

// 1 - configuração de rotas
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'

// components
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">

      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<h1>Contato</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
