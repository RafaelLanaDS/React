
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  return(
    <div className='app'>
      
      {/* CSS global */}
      <h1>React com css</h1>

      {/* CSS componente */}
      <MyComponent />
      <p>este paragrafo do componente</p>
    </div>
  )
}
export default App
