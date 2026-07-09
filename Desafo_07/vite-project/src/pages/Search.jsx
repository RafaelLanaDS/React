import { useSearchParams, Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase(); // pega o valor do parâmetro de busca "q" da URL, remove espaços em branco e converte para minúsculas

  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);

  const filteredItems = items // filter os produtos com base na query de busca. Se a query estiver vazia, retorna um array vazio
    ? items.filter((product) => {
        const name = product.name?.toLowerCase() || "";
        return name.includes(query);
      })
    : [];

  return (
    <div>
      <h1>Resultados disponíveis:</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul className="products">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;