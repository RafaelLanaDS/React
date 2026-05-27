

const Challenge = () => {
    let NumeroOne = 12
    let NumeroTwo = 12

    function somar(){
        console.log(NumeroOne + NumeroTwo)
    }

    return(
        <div>
            <p>{NumeroOne}</p>
            <p>{NumeroTwo}</p>
            <button onClick={somar}>Somar</button>
        </div>
    )
}

export default Challenge

// const Challenge = () => { jeito da aula
//     const valor1 = 4;
//     const valor2 = 4;

//     return(
//         <div>   
//             <h1>Desafio 2</h1>
//             <p>Valor 1: {valor1} + Valor2: {valor2}</p>
//             <button onClick = { () => console.log(valor1+valor2)}>Clique para resolver!</button>
//         </div>
//     )
// }

// export default Challenge