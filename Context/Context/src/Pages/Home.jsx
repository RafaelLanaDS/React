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
  const { color, dispatch } = useTitleColorContext();
  

  // 6 - alterando o estado do complexo
  const changeTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Esta é a página Home.</p>
      <p>Contador: {counter}</p>
      <ChangeCounter/>
      {/* 6 - alterando o estado do complexo */}
      <button onClick={() => changeTitleColor("RED")}>Vermelho</button>
      <button onClick={() => changeTitleColor("BLUE")}>Azul</button>
      <button onClick={() => changeTitleColor("GREEN")}>Verde</button>
    </div>
  )
}

export default Home
