import './App.css'

// 1 - configuração de rotas
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar'

// pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Products from './pages/Products'

function App() {

  return (
    <div className="App">

      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar />
        {/* 2 - links com react router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
