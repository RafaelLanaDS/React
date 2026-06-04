import { useState } from "react"

const CondicaoTernario = () =>{
    const [name, setName] = useState("Rafael")

    return (
        <div>
            <h1>IF ternario</h1>
            {name === "Rafael" ? (<div><p>O nome é Rafael</p></div>) : (<div><p>O nome nao é Rafael agora é João</p></div>)}
            <button onClick={() => setName("João")}>clique aqui</button> {/* altera o estado do componemte*/}
        </div>
    )
}

export default CondicaoTernario