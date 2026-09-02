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

/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useLayoutEffect
   ============================================================================

   1. O QUE É O useLayoutEffect?
      - É um Hook com sintaxe e comportamento idênticos ao `useEffect`, porém com 
        uma diferença crucial na ordem de execução em relação à renderização do DOM.

   2. PRINCIPAIS DIFERENÇAS (useLayoutEffect vs. useEffect)
      - Execução Síncrona vs Assíncrona:
        • useLayoutEffect: Roda de forma SÍNCRONA logo após a alteração do DOM, 
          mas ANTES de o navegador pintar (desenhar) o conteúdo na tela.
        • useEffect: Roda de forma ASSÍNCRONA depois que o navegador já desenhou 
          as alterações na tela.

   3. POR QUE USAR O useLayoutEffect?
      - Evita "Flicker" (Piscadas na UI): Quando você precisa calcular o tamanho ou 
        posição de um elemento na tela (medir a DOM) e ajustá-lo antes que o usuário 
        veja qualquer alteração visual instável.
      - A ideia central é garantir que qualquer modificação seja feita ANTES do 
        usuário enxergar o estado inicial da página.

   4. ORDEM DE EXECUÇÃO NO SEU CÓDIGO
      - No exemplo fornecido:
        1º O `useLayoutEffect` é executado primeiro (imprime "1" e altera para "Outro nome") 
           antes da pintura visual inicial.
        2º O `useEffect` é executado em seguida (imprime "2" e altera para "mudou de novo") 
           após o fluxo do layout.
      
   5. RECOMENDAÇÃO
      - Sempre prefira usar `useEffect` por padrão para não bloquear a renderização 
        da interface.
      - Deixe o `useLayoutEffect` exclusivamente para medições de layout ou ajustes 
        visuais que causam travamento/flicker.
   ============================================================================ */
