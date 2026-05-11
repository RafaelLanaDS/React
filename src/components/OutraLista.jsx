

function OutraLista({ itens }) {
    return (
        <>
            <h3>Minha Lista</h3>
            {
                itens.length > 0 ? // Verifica se a lista tem itens
                    itens.map((item, index)=>( 
                    <p key={index}>{item}</p>
                ))
                :
                <p>A lista está vazia.</p> // Exibe mensagem caso a lista esteja vazia
            }
        </>
    )
}

export default OutraLista;

// itens.map() é usado para iterar sobre o array de itens e renderizar um elemento para cada item. O método map() retorna um novo array contendo os resultados da chamada de uma função para cada elemento do array original.
// A função de callback passada para map() recebe dois argumentos: o item atual (item) e o índice do item no array (index). Dentro da função, um elemento <p> é criado para cada item, e a propriedade key é definida como index para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos. O conteúdo do elemento <p> é definido como o valor do item atual.