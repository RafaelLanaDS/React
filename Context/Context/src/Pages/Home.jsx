import './Home.css'
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter';
// 4 - refatorando com hook
import { useCounterContext } from '../Hooks/useCouterContext';

// 5 - refatorando com hook
import { useTitleColorContext } from '../Hooks/useTitleColorContext';

const Home = () => {
  //const { counter, setCounter } = useContext(CounterContext);
  const { counter, setCounter } = useCounterContext();

  // 5 - refatorando com hook
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Esta é a página Home.</p>
      <p>Contador: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default Home
