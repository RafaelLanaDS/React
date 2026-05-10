
import './App.css';
import SayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <Frase />
      <Frase />
      <Pessoa 
        nome='lucas' 
        idade='22' 
        profissão='Musico'
      />
      <List />
    </div>
    
  )
}

export default App;
