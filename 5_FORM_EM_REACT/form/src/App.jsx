
import './App.css'
import Myforms from './components/Myforms'

function App() {


  return (
    <div className="App">
      <h1>Formularios em react</h1>
      <Myforms user={{name: 'Rafael', email:'rafael@gmail.com', bio: "exemplo de bio"}}/>
    </div>
    
  )
}

export default App
