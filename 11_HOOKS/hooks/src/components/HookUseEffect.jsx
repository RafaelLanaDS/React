import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    //1 - useEffect sem dependencias 

    useEffect(() => {
        console.log(`Componente sendo executado ${number} Vez(es)`)
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 - useEffect com array de dependencias vazio, executa apenas uma vez
    useEffect(() => {
        console.log('Componente sendo executado apenas uma vez')
    }, [])

    // 3 - useEffect com array de dependencias, executa sempre que a dependencia for alterada
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log('Executando apenas quando a variavel anotherNumber for alterada')
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect, executa quando o componente for desmontado
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Executando apenas quando o componente for desmontado')
        }, 2000)

        return () => clearTimeout(timer) // limpa o timer quando estiver em outra pagina, ou seja, quando o componente for desmontado

    }, [anotherNumber])
    
    return (
        <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Execultar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Executar</button>
        <br /> 
        <hr />
        </div>
    )
}

export default HookUseEffect

/* 
    ============================================================================
    RESUMO CONCEITUAL DO HOOK useEffect
    ============================================================================

   1. O QUE É O useEffect?
      - É um dos Hooks mais utilizados no React (lado a lado com o useState).
      - Serve para controlar e lidar com "efeitos colaterais" (side effects) em 
        componentes funcionais.
      - É comumente empregado em tarefas como: alterações diretas na DOM, busca/envio 
        de dados em APIs (operações HTTP), e inicialização de temporizadores/listeners.
      - A principal virtude do hook é nos dar controle preciso sobre **quantas vezes** 
        e **em quais momentos** determinado código deve ser reexecutado.

   2. ESTRUTURA E REGRAS DE EXECUÇÃO
      A sintaxe aceita dois argumentos: `useEffect(callback, [dependencias])`

      a) Sem Array de Dependências:
         useEffect(() => { ... })
         - Executa **a cada re-renderização** do componente (toda vez que qualquer 
           estado ou prop mudar).

      b) Com Array de Dependências Vazio:
         useEffect(() => { ... }, [])
         - Executa **apenas uma vez**, logo após o componente ser montado (carregado) na tela.

      c) Com Variáveis no Array de Dependências:
         useEffect(() => { ... }, [anotherNumber])
         - Executa no momento da montagem e **toda vez que alguma das variáveis** 
           presentes no array sofrer alterações.

   3. TÉCNICA DE CLEANUP (LIMPEZA)
      - Retornar uma função de dentro do useEffect cria o ciclo de "limpeza".
      - Evita comportamentos indesejados e memory leaks (vazamentos de memória).
      - Exemplo Prático: Se um `setTimeout` ou listener for criado e o usuário 
        navegar para outra página (desmontando o componente), a função de limpeza 
        é disparada para interromper o timer (`clearTimeout`) antes que ele tente 
        atualizar algo inexistente na tela.
   ============================================================================ 
*/
