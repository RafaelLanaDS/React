import { useState } from 'react'
import './App.css'


import City from './assets/city.jpg'
import ManageData from './componentes/ManageData'
import ListRender from './componentes/ListRender'
import CondicionalRender from './componentes/CondicionalRender'
import CondicaoTernario from './componentes/CondicaoTernario'
import ShowUserName from './componentes/ShowUserName'
import CarDetails from './componentes/CarDetails'
import Container from './componentes/Container'
import ExecuteFunction from './componentes/ExecuteFunction'
import Message from './componentes/Message'
import ChangeMessage from './componentes/ChangeMessage'
import UserDetails from './componentes/UserDetails'


function App() {

  const cars = [
    {id: 1, marca: "Ferrari", cor: "Azul", Km: 0, NewCar: true},
    {id: 2, marca: "Mustang", cor: "Preto", Km: 5000, NewCar: false}
  ]

  function ShowMessage(){
    console.log("Evento do componente pai!");
  }

  {/* state lift */}
  // PAI → guarda o state e passa funções/valores para os filhos
  const [message, setMessage] = useState("")
  const hanleMessage = (msg) => {
    setMessage(msg)
  }

  {/* Desafio */}
  const users = [
      {id: 1, Nome: "Rafael", Idade:23 , Profissão: "Programador"},
      {id: 2, Nome: "Lucas", Idade:12 , Profissão: "estagiario"},
      {id: 3, Nome: "Will", Idade:30 , Profissão: "Gerente"}
  ];


  return (
    <div>
      <h1>Seção tres</h1>
      <div>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="Paissagem" />
      </div>
      <div>
        {/* imagem em assets */}
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <CondicaoTernario />
      {/* props */}
      <ShowUserName name="Rafael"/>

      {/* Destructuring */}
      <CarDetails marca="Volvo" Km={50.112} cor="Branco" NewCar={false}/>

      {/* reaproveitamento */}
      <h2> <strong>Reaproveitamento de componentes</strong></h2>
      <CarDetails marca="Volvo" Km={50.112} cor="Branco" NewCar={false}/>
      <CarDetails marca="Ford" Km={0} cor="preto" NewCar={true}/>
      <CarDetails marca="Feat" Km={50} cor="vermelho" NewCar={false}/>

      {/* Loop em array de objetos  */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
          marca={car.marca}
          cor={car.cor}
          Km={car.Km}
          NewCar={car.NewCar}
        />
      ))}

      {/* Children */}
      <Container>
          <p>esse é o conteudo</p>
      </Container>

      {/* executar função */}
      <ExecuteFunction MyFunction={ShowMessage} />

      {/* state lift */}
      <Message msg={message}/> {/* ← filho que EXIBE */}
      <ChangeMessage hanleMessage={hanleMessage}/>{/*  ← filho que ALTERA */}


      {/* Dessafio */}
      {users.map((pessoas) =>(
        <UserDetails key={pessoas.id}
          Nome={pessoas.Nome}
          Idade={pessoas.Idade}
          Profissao={pessoas.Profissão}
        />
      ))}
      
    </div>
  )
}

export default App
