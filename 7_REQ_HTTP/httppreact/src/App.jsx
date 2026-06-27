
import './App.css'

import {useState, useEffect} from 'react'

// 4 - custom hook
import {useFetch} from './hooks/useFetch'

const url = 'http://localhost:3000/products' //pegando a url do json-server e salvando em uma constante

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 4 - custom hook
  const {data: items} = useFetch(url) //desestruturando o objeto retornado pelo hook e renomeando a propriedade data para items

  console.log(items)

  // // 1 - resgatando dados da API
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const res = await fetch(url)   // busca os dados (espera a resposta)
  //     const data = await res.json()  // converte resposta pra objeto JS
  //     setProducts(data)              // salva no estado
  //   }
  //   fetchProducts()
  // }, []) // [] = executa só uma vez, quando o componente carrega

  // 2 - adicionando produtos ao banco de dados
  const handleSubmit = async (e) => {
    e.preventDefault() // evita recarregar a página ao submeter o form

    const product = { //criando objeto com os dados do produto para enviar para a API
      name,
      price,
    }

    const res = await fetch(url, { //requisição POST para adicionar produto
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // avisa que vem JSON
      },
      body: JSON.stringify(product), // converte objeto JS pra texto JSON
    })

    // 3 - carregamento dinamico de produtos
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    //limpando os campos do formulário
    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>Listagem de Produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$ {parseFloat(product.price).toFixed(2)}</li>
        ))}
      </ul>

      <hr/>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => 
              setName(e.target.value)} 
              placeholder="Digite o nome do produto"
            />
          </label>
          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              onChange={(e) => 
              setPrice(e.target.value)} 
              placeholder="Digite o preço do produto"
            />
          </label>
          <input 
            type="submit" 
            value="Adicionar Produto" 
            className="button" 
          />
        </form>
      </div>
    </div>
  )
}

export default App

// async/await → lida com operações que levam tempo (como buscar dados de uma API)
// fetch → faz a requisição HTTP (GET por padrão, ou POST/PUT/DELETE se configurado)
// JSON.stringify → converte objeto JavaScript em texto JSON para enviar
// res.json() → converte a resposta da API de volta para objeto JavaScript
// Carregamento dinâmico → atualiza o estado local em vez de refazer o GET, deixando o app mais rápido