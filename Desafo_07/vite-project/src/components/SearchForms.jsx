import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // useNavigate é um hook que permite navegar entre rotas programaticamente

const SearchForms = () => {
    const navigate = useNavigate() // useNavigate retorna uma função que permite navegar entre rotas programaticamente
    const [query, setQuery] = useState('') // query é o estado que armazena o valor do input de busca

    const handleSubmit = (e) => {
        e.preventDefault() // previne o comportamento padrão do formulário de recarregar a página
        navigate(`/search?q=${query}`) // navega para a rota /search, onde q é o valor do input de busca
        setQuery('') // limpa o input de busca
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="O que você está procurando?"
                onChange={(e) => setQuery(e.target.value)}
            />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForms
