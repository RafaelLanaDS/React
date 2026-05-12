import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Container from './components/Layout/Container';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/Contact'>Contato</Link>
        <Link to='/Company'>Empresa</Link>
        <Link to='/NewProject'>Novo Projeto</Link>
      </div>

        <Container customClass="min-height">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Company" element={<Company />} />
              <Route path="/Contact" element={<Contato />} />
              <Route path="/NewProject" element={<NewProject />} />
          </Routes>
        </Container>

      <p>footer</p>

    </BrowserRouter>
  )
}

export default App;