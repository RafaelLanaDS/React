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
    Example: HookUseState,
  },
  {
    id: 'use-reducer',
    label: 'useReducer',
    signature: 'const [state, dispatch] = useReducer(reducer, inicial)',
    summary: 'Organiza estados mais complexos por meio de ações e uma função reducer.',
    Example: HoomUseReducer,
  },
  {
    id: 'use-effect',
    label: 'useEffect',
    signature: 'useEffect(efeito, [dependencias])',
    summary: 'Controla efeitos colaterais, como timers, requisições e inscrições externas.',
    Example: HookUseEffect,
  },
  {
    id: 'use-context',
    label: 'useContext',
    signature: 'const valor = useContext(Contexto)',
    summary: 'Lê valores compartilhados por um Provider sem repassar props por vários níveis.',
    Example: ContextExample,
  },
  {
    id: 'use-ref',
    label: 'useRef',
    signature: 'const referencia = useRef(valorInicial)',
    summary: 'Mantém uma referência mutável entre renders sem provocar uma nova renderização.',
    Example: HookUseRef,
  },
  {
    id: 'use-callback',
    label: 'useCallback',
    signature: 'const funcao = useCallback(callback, [dependencias])',
    summary: 'Memoriza a referência de uma função para evitar recriações desnecessárias.',
    Example: HookUseCallback,
  },
  {
    id: 'use-memo',
    label: 'useMemo',
    signature: 'const valor = useMemo(calculo, [dependencias])',
    summary: 'Memoriza o resultado de um cálculo ou valor entre renderizações.',
    Example: HookUseMemo,
  },
  {
    id: 'use-layout-effect',
    label: 'useLayoutEffect',
    signature: 'useLayoutEffect(efeito, [dependencias])',
    summary: 'Executa um efeito depois do DOM mudar e antes de o navegador pintar a tela.',
    Example: HookUseLayoutEffect,
  },
  {
    id: 'use-imperative-handle',
    label: 'useImperativeHandle',
    signature: 'useImperativeHandle(ref, createHandle, [dependencias])',
    summary: 'Define quais métodos um componente filho expõe para o componente pai.',
    Example: HookUseImperativeHandle,
  },
  {
    id: 'custom-hook',
    label: 'Custom Hook',
    signature: 'const valor = useMeuHook(parametros)',
    summary: 'Extrai e reutiliza lógica de hooks em funções próprias iniciadas por “use”.',
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
            <p>{activeHook.summary}</p>
            <p>Observe o exemplo acima e use os controles para perceber como o Hook participa do ciclo de renderização.</p>
          </div>
        </details>
      </article>
    </section>
  )
}

export default HooksNav