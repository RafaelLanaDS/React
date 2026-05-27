import { useState } from 'react'
import './App.css'


import City from './assets/city.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Seção tres</h1>
      <div>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="Paissagem" />
      </div>
      <div>
        {/* imagem em assets */}
        <img src={City} alt="cidade" />
      </div>
    </div>
  )
}

export default App
