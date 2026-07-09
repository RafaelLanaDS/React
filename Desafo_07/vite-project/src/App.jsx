import './App.css'

// 1 - configuração de rotas
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar'

// pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Products from './pages/Products'
import Info from './pages/Info'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div className="App">

      <h1>React Router</h1>
      <BrowserRouter>{/* Define onde a área do nosso app será renderizada */}
        <NavBar />
        {/* 2 - links com react router */}
        <Routes>{/* define as rotas do nosso app */}
          <Route path="/" element={<Home />} />{/* um elemento para a rota raiz */}
          <Route path="/sobre" element={<Sobre />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Products />} />
          {/* 6 - nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7 - rota não encontrada */}
          <Route path="*" element={NotFound} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
