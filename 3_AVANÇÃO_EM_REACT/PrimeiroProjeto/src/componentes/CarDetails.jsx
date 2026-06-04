

const CarDetails = ({marca, Km, cor, NewCar}) => {
  return (
    <div>
        <h2>Objeto de exemplo utilizando o metodo props</h2>
        <h3>Carro</h3>
        <ul>
            <li>Marca: {marca}</li>
            <li>Km: {Km}</li>
            <li>Cor: {cor}</li>
            <li>Carro: {NewCar && <p>Esse carro é novo</p>}</li>
        </ul>
    </div>
  )
}

export default CarDetails
