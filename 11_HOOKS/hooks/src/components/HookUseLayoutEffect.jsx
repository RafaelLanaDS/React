import { useLayoutEffect, useEffect, useState } from "react"

const HookUseLayoutEffect = () => {
    const [name, setName ] = useState("algum nome")

    useEffect(() => {
        console.log("2")
        setName("mudou de novo")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

  return (
    <div>
      <h2>Use LayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect
