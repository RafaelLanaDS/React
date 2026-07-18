
import './App.css'

// 1 - configuração de rotas
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'

// components
import Nav from './components/Nav'

// pages
import Sobre from './Pages/Sobre'
import Home from './Pages/Home'

function App() {

  return (
    <div className="App"> 
      <h1>Context API</h1>
      <BrowserRouter>{/* Define onde a área do nosso app será renderizada */}
        <Nav/>
        {/* 2 - links com react router */}
        <Routes>{/* define as rotas do nosso app */}
          <Route path="/" element={<Home/>}/>{/* um elemento para a rota raiz */}
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
