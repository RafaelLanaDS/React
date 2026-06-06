import React, { useState } from 'react'
import styles from './Myforms.module.css'

const Myforms = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name)
    // console.log(email)

    const handleSubmit = (Event) => {
        Event.preventDefault();
        console.log("enviando o formulario")
        console.log(name, email)
    };

  return (
    <div>
      {/* 5 - envio de forme */}
      {/* 1 - criação de forme */}
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                name='name' 
                placeholder='Digite seu nome' 
                onChange={handleName}
            />
        </div>

         {/* 2- label envolvendo input */}
         <label>
            <span>E-mail</span>
            {/* 4 - simplificação  de manipulação de state*/}
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='digite seu email'
                onChange={(e) => setEmail(e.target.value)}
            />
         </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myforms
