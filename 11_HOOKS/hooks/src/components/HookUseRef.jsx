import { useState, useEffect, useRef } from "react"

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 - userefDOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef)
        setText("")
        inputRef.current.focus() // volta o foco no input logo apos ser feito algum submit 
    }
    
    return (
        <div>
        {/* 1 - useRef */}
        <h2>UseRef</h2>
        <p>O componente renderizou: {numberRef.current} vezes</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
        {/* 2 - useRefDom */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        </div>
    )
}

export default HookUseRef


/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useRef
   ============================================================================

   1. O QUE É O useRef?
      - É um hook utilizado tanto para persistir valores mutáveis entre renderizações 
        quanto para referenciar diretamente elementos HTML no DOM.
      - Retorna um objeto JavaScript contendo uma única propriedade mutável: `.current`.

   2. PRINCIPAIS CARACTERÍSTICAS
      - NÃO Dispara Re-renderização: Alterar `ref.current` preserva o dado em memória, 
        mas NUNCA faz o componente renderizar novamente na tela (diferente do useState).
      - Acesso ao DOM: Permite associar uma variável a um elemento JSX utilizando a prop `ref`. 
        Isso habilita a manipulação direta do elemento, como chamar a função `focus()` em um input.

   3. RESPOSTA À DÚVIDA: O QUE É `numberRef.current`?
      - `numberRef` é o objeto criado por `useRef(0)` (com valor inicial 0).
      - `.current` é a propriedade interna onde o React guarda o valor real dessa referência.
      - No código (`numberRef.current = numberRef.current + 1`), acessamos o valor 
        guardado, somamos +1 e o reatribuímos a cada re-renderização.

   4. APLICAÇÕES PRÁTICAS NO CÓDIGO
      - Contador de Renderizações: Conta quantas vezes a página renderizou sem criar 
        um loop infinito de re-renderizações (pois alterar o ref não aciona a renderização).
      - Foco Automático: Retorna o cursor piscando para o campo do formulário após o 
        envio (`inputRef.current.focus()`).
   ============================================================================ */