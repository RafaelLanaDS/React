import { useContext, useState } from 'react'
import HookUseState from './HookUseState'
import HoomUseReducer from './HoomUseReducer'
import HookUseEffect from './HookUseEffect'
import HookUseRef from './HookUseRef'
import HookUseCallback from './HookUseCallback'
import HookUseMemo from './HookUseMemo'
import HookUseLayoutEffect from './HookUseLayoutEffect'
import HookUseImperativeHandle from './HookUseImperativeHandle'
import HookCustom from './HookCustom'
import { SomeContext } from './HookUseContext'

const ContextExample = () => {
  const contextValue = useContext(SomeContext)

  return (
    <div className="context-example">
      <span>Valor disponível no contexto</span>
      <strong>{contextValue}</strong>
    </div>
  )
}

const hooks = [
  {
    id: 'use-state',
    label: 'useState',
    signature: 'const [state, setState] = useState(valorInicial)',
    summary: 'Gerencia valores que mudam e atualiza a interface quando o estado é alterado.',
    explanation: `RESUMO CONCEITUAL DO HOOK useState

  1. O QUE É O useState?
  - É o Hook fundamental do React responsável por gerenciar estados em componentes funcionais.
  - Alterar um estado via useState força o React a re-renderizar o componente com o novo valor.

  2. SINTAXE E ESTRUTURA
  const [state, setState] = useState(initialValue)
  - state armazena o valor atual.
  - setState atualiza o estado.
  - initialValue define o valor inicial.

  3. CONCEITOS-CHAVE
  - Variáveis comuns não causam re-renderização; chamadas como setName avisam o React.
  - Inputs controlados mantêm o valor do campo sincronizado com o estado.
  - parseInt converte o valor do input para um número inteiro.`,
    Example: HookUseState,
  },
  {
    id: 'use-reducer',
    label: 'useReducer',
    signature: 'const [state, dispatch] = useReducer(reducer, inicial)',
    summary: 'Organiza estados mais complexos por meio de ações e uma função reducer.',
    explanation: `RESUMO CONCEITUAL DO HOOK useReducer

  1. O QUE É O useReducer?
  - Gerencia estados como o useState, mas centraliza as alterações em uma função reducer.
  - É ideal para estados complexos, listas e ações organizadas por switch.

  2. SINTAXE E ESTRUTURA
  const [state, dispatch] = useReducer(reducerFunction, initialValue)
  - state é o estado atual.
  - dispatch dispara uma alteração.
  - reducerFunction recebe state e action e retorna o novo estado.

  3. CONCEITOS-CHAVE
  - action normalmente contém type e dados adicionais (payload).
  - dispatch aciona a action correspondente.
  - Reducers devem ser funções puras; efeitos colaterais devem ficar nos eventos.`,
    Example: HoomUseReducer,
  },
  {
    id: 'use-effect',
    label: 'useEffect',
    signature: 'useEffect(efeito, [dependencias])',
    summary: 'Controla efeitos colaterais, como timers, requisições e inscrições externas.',
    explanation: `RESUMO CONCEITUAL DO HOOK useEffect

  1. O QUE É O useEffect?
  - Controla efeitos colaterais em componentes funcionais, como APIs, timers e listeners.
  - O array de dependências controla quando o efeito deve ser executado.

  2. REGRAS DE EXECUÇÃO
  - Sem array: executa a cada re-renderização.
  - Com array vazio []: executa uma vez após a montagem.
  - Com dependências: executa na montagem e quando uma dependência muda.

  3. CLEANUP
  - Retornar uma função cria a etapa de limpeza.
  - Isso evita comportamentos indesejados e memory leaks, como timers ativos após desmontar o componente.`,
    Example: HookUseEffect,
  },
  {
    id: 'use-context',
    label: 'useContext',
    signature: 'const valor = useContext(Contexto)',
    summary: 'Lê valores compartilhados por um Provider sem repassar props por vários níveis.',
    explanation: `RESUMO CONCEITUAL: CONTEXT API E HOOK useContext

  1. O QUE É A CONTEXT API?
  - Permite compartilhar dados entre componentes sem passar props manualmente por cada nível.
  - Assim, evita o problema de Prop Drilling.

  2. FLUXO DE FUNCIONAMENTO
  - createContext cria o canal de comunicação.
  - Context.Provider disponibiliza o valor aos componentes filhos.
  - useContext lê o valor diretamente da fonte.

  3. O HOOK useContext
  - Consome informações de um contexto previamente criado.
  - Quando o valor do Provider muda, os componentes consumidores são re-renderizados.`,
    Example: ContextExample,
  },
  {
    id: 'use-ref',
    label: 'useRef',
    signature: 'const referencia = useRef(valorInicial)',
    summary: 'Mantém uma referência mutável entre renders sem provocar uma nova renderização.',
    explanation: `RESUMO CONCEITUAL DO HOOK useRef

  1. O QUE É O useRef?
  - Persiste valores mutáveis entre renderizações e referencia elementos HTML do DOM.
  - Retorna um objeto com uma propriedade mutável: .current.

  2. PRINCIPAIS CARACTERÍSTICAS
  - Alterar ref.current não dispara uma nova renderização.
  - A ref pode acessar o DOM, por exemplo, para chamar inputRef.current.focus().

  3. APLICAÇÕES PRÁTICAS
  - Contar renderizações sem criar um loop de re-renderização.
  - Devolver o foco ao input depois do envio de um formulário.`,
    Example: HookUseRef,
  },
  {
    id: 'use-callback',
    label: 'useCallback',
    signature: 'const funcao = useCallback(callback, [dependencias])',
    summary: 'Memoriza a referência de uma função para evitar recriações desnecessárias.',
    explanation: `RESUMO CONCEITUAL DO HOOK useCallback

  1. O QUE É O useCallback?
  - Memoriza a definição de uma função entre as re-renderizações.
  - Evita que uma nova instância seja criada a cada render.

  2. POR QUE ELE É NECESSÁRIO?
  - Funções são objetos e uma função normal recebe uma nova referência a cada render.
  - Isso pode fazer componentes filhos entenderem que uma prop mudou e executar efeitos novamente.

  3. DEPENDÊNCIAS E USOS
  - [] cria a função uma vez e a reutiliza.
  - Com dependências, a função só é recriada quando uma delas muda.
  - É útil para props de funções e otimização de componentes filhos.`,
    Example: HookUseCallback,
  },
  {
    id: 'use-memo',
    label: 'useMemo',
    signature: 'const valor = useMemo(calculo, [dependencias])',
    summary: 'Memoriza o resultado de um cálculo ou valor entre renderizações.',
    explanation: `RESUMO CONCEITUAL DO HOOK useMemo

  1. O QUE É O useMemo?
  - Memoriza o resultado de um cálculo ou valor entre renderizações.
  - Diferente do useCallback, que memoriza uma função, useMemo memoriza o valor retornado.

  2. IGUALDADE REFERENCIAL
  - Arrays e objetos são comparados por referência em JavaScript.
  - useMemo mantém a mesma referência enquanto as dependências não mudarem.
  - Isso evita que efeitos dependentes de um array sejam executados sem necessidade.

  3. OUTROS USOS
  - Evitar recalcular operações pesadas ou filtrar listas grandes a cada renderização.`,
    Example: HookUseMemo,
  },
  {
    id: 'use-layout-effect',
    label: 'useLayoutEffect',
    signature: 'useLayoutEffect(efeito, [dependencias])',
    summary: 'Executa um efeito depois do DOM mudar e antes de o navegador pintar a tela.',
    explanation: `RESUMO CONCEITUAL DO HOOK useLayoutEffect

  1. O QUE É O useLayoutEffect?
  - Tem sintaxe semelhante ao useEffect, mas executa em outra etapa da pintura do DOM.

  2. DIFERENÇA PARA useEffect
  - useLayoutEffect executa de forma síncrona após a alteração do DOM e antes da pintura.
  - useEffect executa depois que o navegador já desenhou as alterações.

  3. POR QUE USAR?
  - Evita flicker quando é necessário medir ou ajustar um elemento antes de o usuário vê-lo.
  - Prefira useEffect por padrão e reserve useLayoutEffect para medições e ajustes visuais.`,
    Example: HookUseLayoutEffect,
  },
  {
    id: 'use-imperative-handle',
    label: 'useImperativeHandle',
    signature: 'useImperativeHandle(ref, createHandle, [dependencias])',
    summary: 'Define quais métodos um componente filho expõe para o componente pai.',
    explanation: `RESUMO CONCEITUAL DO HOOK useImperativeHandle E forwardRef

  1. O QUE É O useImperativeHandle?
  - Personaliza os valores e funções expostos por uma ref para um componente pai.
  - Permite criar uma interface de métodos públicos imperativos.

  2. POR QUE USAR forwardRef?
  - Refs não são repassadas como props comuns para componentes personalizados.
  - forwardRef permite que o componente filho receba e use a ref do pai.

  3. FLUXO DO EXEMPLO
  - O pai cria inputRef e passa a ref para SomeComponent.
  - useImperativeHandle expõe o método validate().
  - O botão do pai chama inputRef.current.validate().

  4. BOAS PRÁTICAS
  - Use imperatividade pontualmente para animações, foco, limpeza de formulários ou scroll.`,
    Example: HookUseImperativeHandle,
  },
  {
    id: 'custom-hook',
    label: 'Custom Hook',
    signature: 'const valor = useMeuHook(parametros)',
    summary: 'Extrai e reutiliza lógica de hooks em funções próprias iniciadas por “use”.',
    explanation: `RESUMO CONCEITUAL: CUSTOM HOOKS E useDebugValue

  1. O QUE SÃO CUSTOM HOOKS?
  - São funções criadas para compartilhar lógica com estado entre componentes React.
  - Devem começar com use, como usePrevious, useFetch ou useAuth.
  - Abstraem regras complexas e permitem reutilizar lógica.

  2. FLUXO DO usePrevious
  - useRef mantém o dado em memória sem forçar um re-render.
  - O hook retorna o valor antigo, o JSX é renderizado e o useEffect atualiza a ref depois.

  3. useDebugValue
  - É um Hook nativo para uso dentro de Custom Hooks.
  - Exibe um rótulo explicativo do hook no React Developer Tools.`,
    Example: HookCustom,
  },
]

const HooksNav = () => {
  const [activeHookId, setActiveHookId] = useState(hooks[0].id)
  const activeHook = hooks.find(({ id }) => id === activeHookId) || hooks[0]
  const ActiveExample = activeHook.Example

  return (
    <section className="hooks-explorer" aria-label="Explorador de React Hooks">
      <div className="hooks-nav-header">
        <div>
          <p className="eyebrow">Laboratório de React</p>
          <h2>Explore os Hooks</h2>
          <p className="hooks-intro">Escolha um conceito para ver a demonstração funcionando.</p>
        </div>
        <span className="hook-count">{hooks.length} exemplos</span>
      </div>

      <nav className="hooks-nav" aria-label="Navegação dos hooks">
        {hooks.map(({ id, label }) => (
          <button
            className={id === activeHookId ? 'hook-tab is-active' : 'hook-tab'}
            key={id}
            type="button"
            aria-pressed={id === activeHookId}
            onClick={() => setActiveHookId(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <article className="hook-card" key={activeHook.id}>
        <div className="hook-card-heading">
          <div>
            <p className="card-kicker">Hook selecionado</p>
            <h3>{activeHook.label}</h3>
          </div>
          <code className="hook-signature">{activeHook.signature}</code>
        </div>

        <p className="hook-summary">{activeHook.summary}</p>

        <div className="example-shell">
          <div className="example-label">
            <span className="status-dot" /> Exemplo prático
          </div>
          <div className="hook-example">
            <ActiveExample />
          </div>
        </div>

        <details className="hook-explanation">
          <summary>Explicação do Hook <span aria-hidden="true">+</span></summary>
          <div className="explanation-content">
            <pre className="hook-notes">{activeHook.explanation}</pre>
          </div>
        </details>
      </article>
    </section>
  )
}

export default HooksNav