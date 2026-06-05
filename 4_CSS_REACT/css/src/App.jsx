
import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15
  const [name] = useState("Rafael")

  const redTitle = false

  return(
    <div className='app'>

      {/* CSS global */}
      <h1>React com css</h1>

      {/* CSS componente */}
      <MyComponent />
      <p>este paragrafo do componente</p>

      {/* inlise css */}
      <p style={{color: 'blue', padding: "25px", borderTop:"2px solid black"}}>este elemento foi estilizado de forma inline</p>

      
      {/* inlise css dinamico */}
      <h2 style={n < 10 ?({color: "purple"}) :({color: "pink"})}>CSS DINAMICO</h2>
      <h2 style={n > 10 ?({color: "purple"}) :({color: "pink"})}>CSS DINAMICO</h2>
      <h2 style={name === "Rafael" ?({color: "green"}) :({color: "orange"})}>CSS DINAMICO</h2>
      <h2 style={name === "rafael" ?({color: "green"}) :({color: "orange"})}>CSS DINAMICO</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
    </div>
  )
  
}
export default App
