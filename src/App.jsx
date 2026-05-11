
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/Loyout/NavBar';
import Footer from './components/Loyout/Footer';

function App() {

  return (
    <BrowserRouter> 
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

//<BrowserRouter> Componente de navegação
//<Routes> Componente de rotas
//<route path='/' element={<Home />} /> Rota para a página Home