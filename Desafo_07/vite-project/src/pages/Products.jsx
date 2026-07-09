import { useParams } from 'react-router-dom' // serev para pegar o id da rota
import {useFetch} from '../hooks/useFetch'
import {Link} from 'react-router-dom'

const Products = () => {
  // 4 - rota dinâmica
  const {id} = useParams() // pega o id da rota dinâmica use para pegar o id da rota dinâmica, que é passado como parâmetro na URL. O useParams retorna um objeto com os parâmetros da rota, e podemos desestruturar esse objeto para pegar o id diretamente.

  // 5 - carregamento de dados de um item individual
  const url = `http://localhost:3000/products/${id}`

  const {data: product, loading, error} = useFetch(url)
  
  return (
    <div>
      <p>ID do Produto: {id}</p>
      {error && <p>Erro: {error}</p>}
      {loading && <p>Carregando...</p>}
      {product && ( 
        <div>
          <h1>Nome: {product.name} </h1>
          <p>Preço: R$ {product.price.toFixed(2)}</p>
          <p>Descrição: {product.description}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default Products
