import React, { useState } from 'react'
import styles from './Myforms.module.css'

const Myforms = ({user}) => {
    // 6 - controlled inputs

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : '')

    const [role, setRole] = useState(user ? user.role : '')

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
        console.log(name, email, bio, role)

        //validação em cima 
        //envio em baixo

        // 7 - limpar form
        setName('')
        setEmail('')
        setBio('')
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
                    value={name}
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
                    value={email}
                />
            </label>

            {/* 8 - text area */}
            <label htmlFor="">
                <span>Bio</span>
                <textarea  
                    name="bio"   
                    id="bio"  
                    placeholder='descrição do usuario'   
                    onChange={(e) => setBio(e.target.value)}  
                    value={bio}>
                </textarea>
            </label>

            {/* 9 - SELECT */}
            <label>
                <span>Função no sistema</span>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myforms

// ─────────────────────────────────────────
// NOVO - CONTROLLED INPUTS COM DADOS DO BACKEND
// ─────────────────────────────────────────
// user ? user.name : ''
// → se vier um usuário do backend, preenche o input com o dado dele
// → se não vier, começa vazio ''
// → muito útil em formulários de EDIÇÃO!
//
// Exemplo:
// useState(user ? user.name : '')
//           ↑         ↑        ↑
//      tem user?  usa o nome  senão vazio
//
// ─────────────────────────────────────────
// RESUMO GERAL DO FORMULÁRIO
// ─────────────────────────────────────────
// Controlled Input → value={state}            → espelha o state no input
// Limpar form      → setState('')             → limpa após envio
// Textarea         → value + onChange         → igual ao input
// Select           → value + onChange         → captura opção escolhida
// Props com user   → user ? user.dado : ''    → preenche se vier do backend
//
// Todos os inputs seguem o mesmo padrão:
// value={state} + onChange={(e) => setState(e.target.value)} ✅
// ─────────────────────────────────────────