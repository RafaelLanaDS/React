import { useState } from "react";

const UserDetails = () => {

    const [usuarios, setUsers] = useState([
        { id: 1, name: "Rafael", idade: 23, Profissao: "Programador"},
        { id: 2, name: "Matheus", idade: 20, Profissao: "Jardinheiro"},
        { id: 3, name: "Maria", idade: 13,Profissao: "Dentista"}
    ]);

  return (
    <div>
      <ul>
        {usuarios.map((usuarios) => (
            <li key={usuarios.id}>
                Nome: {usuarios.name},
                Idade: {usuarios.idade},
                Profissão: {usuarios.Profissao}
                {usuarios.idade >= 18
                    ? <p>Pode tirar carteira de motorista</p>
                    : <p>Não pode tirar Habilitação</p>
                }
            </li>
        ))}
      </ul>

    </div>
  )
}

export default UserDetails
