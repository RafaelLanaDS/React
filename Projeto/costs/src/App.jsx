import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Container from './components/Layout/Container';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contato />} />
            <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />

    </BrowserRouter>
  )
}

export default App;