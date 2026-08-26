import {useReducer, useState} from 'react'

const HoomUseReducer = () => {

  // 1 - comecando com o useReducer

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  }, 0)

  // avançando no useReducer
  const initialTaks = [
    {
      id: 1,
      title: 'Estudar programação',
    },
    {
      id: 2,
      title: 'Ler livros',
    },
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD': //adiconando uma nova tarefa
        const newTask = {
          id: Math.random(), // gerando um id aleatório para a nova tarefa
          title: action.title,
        }
        setTaskText('')
        return [...state, newTask] // deixa as tarefas antigas e adiciona a nova tarefa 

      case 'REMOVE': // removendo uma tarefa
          return state.filter((task) => task.id !== action.id) // filtra as tarefas e retorna apenas as que não tem o id da tarefa que foi removida
        default:
          return state
    }
  }
  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({type: 'ADD', title: taskText}) // chamando a função dispatchTasks e passando o tipo de ação e o título da nova tarefa
    setTaskText('')
  }

  const removeTask = (id) => {
    dispatchTasks({type: 'REMOVE', id}) // chamando a função dispatchTasks e passando o tipo de ação e o id da tarefa que será removida
  }

  return (
    <div>
      <h2>Use Reducer</h2>
      <p>Número: {number}</p>
      <button onClick={() => dispatch()}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Adicionar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.title}</li>
      ))}
      <hr />
    </div>
  )
}

export default HoomUseReducer


/* 
============================================================================
RESUMO CONCEITUAL DO HOOK useReducer
============================================================================

   1. O QUE É O useReducer?
      - Tem a mesma função básica que o useState: gerenciar estados.
      - A diferença principal é que ele permite executar uma função redutora
        (reducer) customizada no momento em que o valor precisa ser alterado.
      - É ideal para estados complexos ou lógica de negócio estruturada (como listas,
        estruturas de dados compostas ou ações via instrução switch).

   2. SINTAXE E ESTRUTURA
      const [state, dispatch] = useReducer(reducerFunction, initialValue);

      - state: O estado atual mantido pelo hook (ex: number, tasks).
      - dispatch: A função disparadora que enviamos para solicitar uma alteração.
      - reducerFunction: Função que recebe (state, action) e retorna o NOVO estado.
      - initialValue: O valor inicial do estado.

   3. CONCEITOS-CHAVE
      - state: O valor vinculado/armazenado no momento.
      - action: Um objeto enviando o que deve ser feito. Geralmente contém 'type'
        (ex: 'ADD', 'REMOVE') e dados adicionais chamados de payload (ex: 'title', 'id').
      - dispatch: A função executada para acionar a action correspondente.

   4. NOTAS SOBRE O CÓDIGO
      - Math.random(): Função do JavaScript usada para gerar números aleatórios. 
        Note que Math.random() não aceita parâmetros (o 'state' passado em 
        Math.random(state) é ignorado pela função JS).
      - Efeitos Colaterais no Reducer: A chamada setTaskText('') dentro do 
        taskReducer é um efeito colateral. O ideal em padrões React é manter
        funções reductoras "puras" e realizar reset de inputs nas funções de 
        manipulação de eventos (como feito no handleSubmit).
============================================================================ 
*/