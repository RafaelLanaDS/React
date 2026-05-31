import { useState } from 'react'
import './App.css'


import City from './assets/city.jpg'
import ManageData from './componentes/ManageData'
import ListRender from './componentes/ListRender'
import CondicionalRender from './componentes/CondicionalRender'
import CondicaoTernario from './componentes/CondicaoTernario'
import ShowUserName from './componentes/ShowUserName'
import CarDetails from './componentes/CarDetails'

function App() {

  const cars = [
    {id: 1, marca: "Ferrari", cor: "Azul", Km: 1000, NewCar: true}
  ]

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
          marca={car.marca}
          cor={car.cor}
          Km={car.Km}
          NewCar={car.NewCar}
        />
      ))}


    </div>
  )
}

export default App
