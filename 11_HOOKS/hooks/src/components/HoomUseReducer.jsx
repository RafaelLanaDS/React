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

  }
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks)
  const [taskText, setTaskText] = useState('')

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
        <li key={task.id}>{task.title}</li>
      ))}
      <hr />
    </div>
  )
}

export default HoomUseReducer


// dispatch , action , Math.random
// state e o valor vinculado ao dispatch, action é o que vai ser feito com esse valor, ou seja, a ação que vai ser executada.