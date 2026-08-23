import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Maria'

    const [name, setName] = useState('João')

    const changeName = () => {
        userName = 'Pedro'
        setName('Lucas')

    }

    // 2 - useState e input
    const [age, setAge] = useState(18)
    const handleSubmit = (e) => {
        e.preventDefault()

        //envio a uma api
        console.log(age)
    }


    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeName}>Mudar variaveis</button>
            <hr />
            
            {/* 2 - useState e input */}
            <h2>useState com input</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Voce tem {age} anos</p>
            <hr />
        </div>
    )
}

export default HookUseState
