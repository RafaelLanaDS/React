

const Events = () => {
    const exenploDeEvento = (e) => { {/* (e) usado para acessar o evento */ }
        console.log(e);
        console.log("ativou o evento")
    };

    return (
        <>
            <div>
                <button onClick={exenploDeEvento}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui tambem</button>{/* mesma coisa do const exenploDeEvento = (e) => {*/ }
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log("isso nao deveria existir")
                    }
                }}>Outro tipo</button>
            </div>
        </>
    )
}

export default Events

/*
Resumo:

1. onClick={exenploDeEvento}
- Passa uma função já criada para o evento.
- Melhor para reutilizar código.
- Permite acessar o evento pelo parâetro (e).

2. onClick={() => console.log("clicou")}
- Cria uma função anônima diretamente no botão.
- Útil para ações rápidas e simples.

3. onClick={() => { ... }}
- Também é uma função anônima.
- Usada quando precisa executar várias linhas,
  condições, chamadas de funções, etc.

Diferença principal:
- A primeira reutiliza uma função existente.
- As outras criam funções no momento do clique.
*/