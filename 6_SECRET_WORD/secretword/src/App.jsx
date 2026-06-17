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

  const [pickedWord, setPickeWord] = useState("")
  const [pickedCategory, setPickeCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  //start the secret word game 
  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickWordAndCategory()

    //create an array of latters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    //fill states
    setPickeWord(word)
    setPickeCategory(category)
    setLetters(letters)

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
    </div>
  )
}

export default App
