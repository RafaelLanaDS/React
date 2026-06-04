
const UserDetails = ({Nome, Idade, Profissao}) => {
  return (
    <div>
      <h3>Nome: {Nome}</h3>
      <p>Idade: {Idade}</p>
      <p>Profissão: {Profissao}</p>
      {Idade >= 18 ? (<p>✅ Pode tirar Habilitação</p>) : (<p>❌ Não pode tirar carteira de habilitação</p>)}
    </div>
  )
}

export default UserDetails
