import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Maria'

    const [name, setName] = useState('João')

    const changeName = () => {
        userName = 'Pedro'
        setName('Lucas')

    }

    // 2 - useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault() // evita que a pagina seja recarregada

        //envio a uma api
        console.log(age)
    }


    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeName}>Mudar variaveis</button>
            <br /> <br />
            {/* 2 - useState e input */}
            <h2>useState com input</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Voce tem {age} anos</p>
            <hr />
        </div>
    )
}

export default HookUseState


/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useState
   ============================================================================

   1. O QUE É O useState?
      - É o Hook fundamental do React responsável por gerenciar estados em 
        componentes funcionais.
      - Ao contrário de variáveis comuns do JS (como `let userName`), a alteração 
        de um estado via useState força o React a re-renderizar o componente na tela 
        com o novo valor atualizado.

   2. SINTAXE E ESTRUTURA
      const [state, setState] = useState(initialValue);

      - state: A variável de leitura que armazena o estado atual (ex: `name`, `age`).
      - setState: A função modificadora usada exclusivamente para atualizar o valor 
        do estado (ex: `setName('Lucas')`, `setAge(...)`).
      - initialValue: O valor inicial do estado ('João', 18, etc.).

   3. CONCEITOS-CHAVE & OBSERVAÇÕES DO CÓDIGO
      - Reatividade vs Variáveis Comuns: No método `changeName`, a variável `userName` 
        muda para 'Pedro' na memória, mas o React NÃO re-renderiza a tela por causa 
        disso. Já a chamada `setName('Lucas')` avisa o React para atualizar a UI.
      - Controlled Inputs (Inputs Controlados): Ao vincular `value={age}` e atualizar 
        com `onChange={(e) => setAge(...)}`, mantemos o valor do campo HTML 
        sincronizado diretamente com o estado da aplicação.
      - Truncamento e Conversão: `parseInt(e.target.value)` garante que o valor lido 
        do campo de texto seja convertido para um tipo numérico inteiro antes de ser 
        salvo no estado `age`.
   ============================================================================ */