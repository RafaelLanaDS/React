import React from 'react'
import HookUseState from '../components/HookUseState'
import HoomUseReducer from '../components/HoomUseReducer'
import HookUseEffect from '../components/HookUseEffect'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

const Home = () => {

    const contextValue = useContext(SomeContext) // useContext é um hook que permite acessar o valor do contexto criado no componente HookUseContext

    return (
        <div>
        <h2>Home</h2>
        <HookUseState/>
        <HoomUseReducer/>
        <HookUseEffect/>
        <h2>Use Context</h2>
        <p>O valor do contexto é: {contextValue}</p>
        <hr />
        </div>
    )
}

export default Home
