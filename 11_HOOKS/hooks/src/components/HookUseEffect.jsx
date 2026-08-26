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
    useEffect(() => {
        
    })

    return (
        <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Execultar</button>
        <br /> <br />
        <hr />
        </div>
    )
}

export default HookUseEffect
