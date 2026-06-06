import React from 'react'
import styles from './Myforms.module.css'

const Myforms = () => {
  return (
    <div>
      {/* criação de formes */}
      <form>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome' />
        </div>

         {/* label envolvendo input */}
         <label>
            <span>E-mail</span>
            <input type="email" name="email" id="email" placeholder='digite seu email'/>
         </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myforms
