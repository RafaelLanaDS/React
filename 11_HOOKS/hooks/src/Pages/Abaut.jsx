import React from 'react'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'


const Abaut = () => {
  const contextValue = useContext(SomeContext) // useContext é um hook que permite acessar o valor do contexto criado no componente HookUseContext
   
  return (
    <div>
      <h2>Abaut</h2>
      <p>O valor do contexto é: {contextValue}</p>
    </div>
  )
}

export default Abaut
