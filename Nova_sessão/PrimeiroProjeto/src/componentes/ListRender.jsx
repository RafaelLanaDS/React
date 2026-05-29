import React, { useState } from 'react'
// ⚠️ setUsers não se importa do React, vem do próprio useState!

const ListRender = () => {
    
    const [list] = useState(["Rafael", "Matheus", "Lucas", "Maria"])
    
    const [usuarios, setUsers] = useState([
        { id: 1, name: "Rafael", idade: 23},
        { id: 2, name: "Matheus", idade: 20},
        { id: 3, name: "Maria", idade: 13}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        // Previous State → pega o valor ATUAL da lista antes de modificar
        // prevUsers = estado anterior completo
        // .filter() → retorna todos EXCETO o que tem o id sorteado
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

  return (
    <div>
        <ul> 
            {list.map((item) => ( 
                <li key={item}>{item}</li> 
            ))}
        </ul>
        <ul>
            {usuarios.map((usuarios) => (
                <li key={usuarios.id}>
                    {usuarios.id} →
                    {usuarios.name} →
                    {usuarios.idade}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete um usuario</button>
    </div>
  )
}

export default ListRender

// ─────────────────────────────────────────
// RESUMO
// ─────────────────────────────────────────
// Renderização de lista → .map() percorre array e retorna JSX
// key                   → identificador único obrigatório em listas
// Previous State        → acessa o valor atual antes de modificar
// .filter()             → remove itens do array sem mutar o original
//
// Math.random()         → gera número aleatório entre 0 e 1 (ex: 0.7432)
// Math.random() * 4     → multiplica para o range desejado (ex: 0 até 3.99)
// Math.floor()          → arredonda para baixo, remove a vírgula (ex: 3.99 → 3)
//
// Juntos:
// Math.floor(Math.random() * 4) → número inteiro aleatório entre 0 e 3
// ─────────────────────────────────────────