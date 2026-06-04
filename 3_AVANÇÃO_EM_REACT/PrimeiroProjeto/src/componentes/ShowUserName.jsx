import React, { useState } from 'react'

// PROPS → passa valores do componente PAI para o componente FILHO

const ShowUserName = (props) => {
// props é um OBJETO que recebe todos os valores passados pelo pai
// pode ter qualquer nome, mas "props" é o padrão da comunidade

  return (
    <div>
      <p>O nome é: {props.name}</p>
      {/* props.name → acessa a propriedade "name" do objeto props */}
    </div>
  )
}

export default ShowUserName

// Como usar no PAI:
// <ShowUserName name="Rafael" />
//                   ↑
//           vira props.name no filho!