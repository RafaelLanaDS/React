import { useParams } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

const Products = () => {
  // 4 - rota dinâmica
  const {id} = useParams()

  // 5 - carregamento de dados de um item individual
  const url = `http://localhost:3000/products/${id}`

  const {data: product, loading, error} = useFetch(url)

  return (
    <div>
      <p>ID do Produto: {id}</p>
      {error && <p>Erro: {error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <p>
          Nome: {product.name} - Preço: R$ {product.price?.toFixed(2) ?? 'N/A'}
        </p>
      )}
    </div>
  )
}

export default Products
