import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    //1 - useEffect sem dependencias 

    useEffect(() => {
        console.log(`Componente sendo executado ${number} Vez(es)`)
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 2 - useEffect com array de dependencias vazio, executa apenas uma vez
    useEffect(() => {
        console.log('Componente sendo executado apenas uma vez')
    }, [])

    // 3 - useEffect com array de dependencias, executa sempre que a dependencia for alterada
    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log('Executando apenas quando a variavel anotherNumber for alterada')
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect, executa quando o componente for desmontado
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Executando apenas quando o componente for desmontado')
        }, 2000)

        return () => clearTimeout(timer) // limpa o timer quando estiver em outra pagina, ou seja, quando o componente for desmontado

    }, [anotherNumber])
    
    return (
        <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Execultar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Executar</button>
        <br /> 
        <hr />
        </div>
    )
}

export default HookUseEffect
