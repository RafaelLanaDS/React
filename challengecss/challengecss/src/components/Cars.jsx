import { useState } from "react"
import styles from './Cars.module.css'

const Cars = ({name, cor, modelo}) => {

const [cars] = useState([
    { id: 1, nome: "Corolla", cor: "Prata", modelo: "XEI 2024" },
    { id: 2, nome: "Civic", cor: "Preto", modelo: "Touring 2023" },
    { id: 3, nome: "Onix", cor: "Branco", modelo: "LTZ 2025" },
    { id: 4, nome: "Compass", cor: "Cinza", modelo: "Longitude 2024" },
    { id: 5, nome: "Mustang", cor: "Vermelho", modelo: "Mach 1 2023" }
]);
  return (
    <div className={styles.content}>
        {cars.map((carros) =>     
        (<div className={styles.new_content} key={carros.id} >
          <h2>Nome:{carros.nome}</h2>
          <h3>modelo:{carros.modelo}</h3>
          <h4>Cor: {carros.cor}</h4>
        </div>))}
    </div>
  )
}

export default Cars
