import React, { useState } from 'react'
import styles from './Myforms.module.css'

const Myforms = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
        // onChange → dispara a cada letra digitada
        // e.target.value → pega o valor atual do input
        // setName → atualiza o state com o novo valor
    };

    const handleSubmit = (Event) => {
        Event.preventDefault();
        // onSubmit → dispara quando o formulário é enviado
        // Event.preventDefault() → cancela o recarregamento da página
        // sem ele a página recarregaria e perderia os dados!
        console.log("enviando o formulario")
        console.log(name, email)
    };

  return (
    <div>
        {/* 5 - envio de forme */}
        {/* 1 - criação de forme */}
      <form onSubmit={handleSubmit}>
        {/* onSubmit → escuta o envio do form e chama handleSubmit */}
        <div>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                name='name' 
                placeholder='Digite seu nome' 
                onChange={handleName}
                // onChange → chama handleName a cada letra digitada
                // forma separada → usada quando a lógica é mais complexa
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
                // onChange → função inline direto no input
                // forma simplificada → usada quando só precisa atualizar o state
            />
         </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myforms

// ─────────────────────────────────────────
// RESUMO
// ─────────────────────────────────────────
// onChange          → dispara a cada letra digitada no input
//                    usa e.target.value para pegar o valor atual
//
// onSubmit          → dispara quando o formulário é enviado
//                    sempre usar com preventDefault!
//
// preventDefault()  → cancela o comportamento padrão do form
//                    sem ele a página recarrega e perde os dados
//
// Forma separada  → const handleName = (e) => setName(e.target.value)
// Forma inline    → onChange={(e) => setEmail(e.target.value)}
// Resultado final → os dois fazem a mesma coisa! ✅
// ─────────────────────────────────────────