import { useState, useEffect, useRef } from "react"

const HookUseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 - userefDOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef)
        setText("")
        inputRef.current.focus() // volta o foco no input logo apos ser feito algum submit 
    }
    
    return (
        <div>
        {/* 1 - useRef */}
        <h2>HookUseRef</h2>
        <p>O componente renderizou: {numberRef.current} vezes</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>contador B</button>
        {/* 2 - useRefDom */}
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        </div>
    )
}

export default HookUseRef


//  numberRef.current ??