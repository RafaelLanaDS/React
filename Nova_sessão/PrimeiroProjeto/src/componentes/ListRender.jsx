import React, { useState } from 'react'
// Renderização de lista → exibir arrays de dados na tela usando .map()

const ListRender = () => {
    
    const [list] = useState(["Rafael", "Matheus", "Lucas", "Maria"])
    
    const [usuarios] = useState([
        { id: 564545, name: "Rafael", idade: 23},
        { id: 564559, name: "Matheus", idade: 20},
        { id: 594545, name: "Maria", idade: 13}
    ]);

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
                {usuarios.name} - {usuarios.idade}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender

// useState com array → guarda a lista de dados
// sem setList pois a lista não vai mudar
//.map() percorre cada item do array e retorna JSX 
// key → identificador único obrigatório em listas!
