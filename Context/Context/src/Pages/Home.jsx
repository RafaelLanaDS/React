import './Home.css'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'


const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Esta é a página Home.</p>
      <p>Contador: {counter}</p>
    </div>
  )
}

export default Home
