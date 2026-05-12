
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Switch>
          <Route path="/">
              <Home />    
          </Route>
          <Route path="/Company">
              <Company />
          </Route>
          <Route path="/Contact">
              <Contact />
          </Route>
          <Route path="/NewProject">
              <NewProject />
          </Route>
      </Switch>
      <p>footer</p>
    </Router>
  )
}

export default App;
