import { useState } from "react"

const CondicaoTernario = () =>{
    const [name] = useState("Rafael")

    return (
        <div>
            <h1>IF ternario</h1>
            {name === "Rafael" ? (<div><p>O nome é Rafael</p></div>) : (<div><p>O nome nao é Rafael</p></div>)}
            <button></button>
        </div>
    )
}

export default CondicaoTernario