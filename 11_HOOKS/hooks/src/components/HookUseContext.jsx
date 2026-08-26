import {createContext} from 'react'

export const SomeContext = createContext() // faz com que o contexto seja criado e exportado para ser utilizado em outros componentes

export const HookUseContext = ({children}) => { // recebe os filhos do componente, ou seja, tudo que estiver dentro do componente HookUseContext
    const   contextValue = 'Valor do contexto' // valor que será passado para os componentes filhos

    return (

        <SomeContext.Provider value={contextValue}>  
            {children} 
        </SomeContext.Provider>
    )
}


/* ============================================================================
   RESUMO CONCEITUAL: CONTEXT API E HOOK useContext
   ============================================================================

   1. O QUE É A CONTEXT API?
      - É um recurso nativo do React que permite compartilhar dados ("estados globais") 
        entre componentes sem a necessidade de passar props manualmente em cada 
        nível da árvore de componentes (evitando o problema de "Prop Drilling").

   2. FLUXO DE FUNCIONAMENTO (3 PASSOS):
      - Criar o Contexto: Com `createContext()`, criamos o canal de comunicação.
      - Criar o Provider (Provedor): Envolvemos os componentes filhos com o 
        `<Context.Provider value={...}>` para disponibilizar o valor.
      - Consumir o Contexto: Dentro de qualquer componente filho (como a página About), 
        usamos o hook `useContext(Contexto)` para ler o valor direto da fonte.

   3. O HOOK useContext
      - É a ferramenta utilizada para ler/consumir as informações de um contexto 
        previamente criado.
      - Sempre que o valor passado no `Provider` for alterado, todos os componentes 
        que consomem aquele contexto via `useContext` serão automaticamente 
        re-renderizados com o novo valor.
   ============================================================================ */