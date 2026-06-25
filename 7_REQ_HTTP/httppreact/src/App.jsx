
import './App.css'

import {useState, useEffect} from 'react'

const url = 'http://localhost:3000/products' // 2 - endpoint da API 

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados da API
  useEffect(() => {
    async function fetchProducts() {

      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)

    }
    
    fetchProducts()
  }, [])

  // 2 - adicionando produtos ao banco de dados
  const handleSubmit = async (e) => {

  }

  return (
    <div className="App">
      <h1>Listagem de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price.toFixed(2)}</li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Adicionar Produto" />
        </form>
      </div>
    </div>
  )
}

export default App
