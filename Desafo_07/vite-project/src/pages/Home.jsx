import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import './Home.css'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error} = useFetch(url) // pega os dados da API e renomeia data para items

  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
      {items && (
        <ul className="products">{/* pega os itens da API */}
          {items && items.map((item) => (
            <li key={item.id}>
              {item.name}
               - R$ {item.price.toFixed(2)}
               {/* 4 - rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>{/* to={`/products/${item.id}`} faz com que o link navegue para a rota dinâmica do produto */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
