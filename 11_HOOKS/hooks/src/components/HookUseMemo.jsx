import {useState, useEffect, UseMemo} from "react";

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    // const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]

    }, [])

    useEffect (() => {
        console.log("premium numbers foi alterado")
    },  [premiumNumbers])

    return (
        <div>
        <h2>UseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ?  <p>acertou o numero</p> : ''}
        <hr />
        </div>
    )
}

export default HookUseMemo

/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useMemo
   ============================================================================

   1. O QUE É O useMemo?
      - É um Hook de otimização de performance no React usado para **memorizar o
        RESULTADO de um cálculo ou um VALOR** (como arrays ou objetos) entre
        renderizações.
      - Diferença para o useCallback: O useCallback memoriza uma *função*, enquanto
        o useMemo memoriza o *valor retornado* por uma função.

   2. IGUALDADE REFERENCIAL (O CASO DO SEU CÓDIGO)
      - No JavaScript, objetos e arrays comparados por referência nunca são iguais
        (`["0"] !== ["0"]`).
      - Se usássemos a variável comum (`const premiumNumbers = ["0", "100", "200"]`), 
        um NOVO array seria recriado na memória a cada digitação no input.
      - Isso faria o `useEffect` (que escuta `[premiumNumbers]`) rodar a toda hora,
        pois a referência na memória teria mudado.
      - Com `useMemo`, garantimos a **referência do objeto**: o array permanece o 
        mesmo na memória e o `useEffect` executa apenas uma vez.

   3. OUTRO CASO DE USO: CÁLCULOS PESADOS
      - Também é usado para evitar recalcular operações matematicamente lentas
        ou re-filtrar listas grandes a cada re-renderização irrelevante do componente.

   4. SINTAXE
      const valorMemorizado = useMemo(() => {
          return calcularAlgo(propOuEstado);
      }, [dependencias]);
   ============================================================================ */