import { useState } from 'react'
import './App.css'


import City from './assets/city.jpg'
import ManageData from './componentes/ManageData'

function App() {

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
      <ManageData />
    </div>
  )
}

export default App
