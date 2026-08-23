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

    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeName}>Mudar variaveis</button>
            <hr />
        </div>
    )
}

export default HookUseState
