//css
import './App.css'

//react
import { useCallback, useEffect, useState } from 'react'

//data
import {wordsList} from "./data/words"

//componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {
  const [gameStage, setGameStage] = useState (stages[0].name);
  const [words] = useState(wordsList);

  //start the secret word game 
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //process the latter input
  const verifyLatter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return(
    <div className='App'>
      {gameStage ===  "start" && <StartScreen startGame={startGame} />}
      {gameStage ===  "game" && <Game verifyLatter={verifyLatter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
      <h1>huioioioo</h1>
    </div>
  )
}

export default App
