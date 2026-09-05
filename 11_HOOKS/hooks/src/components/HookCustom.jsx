import { useState } from "react";
import { usePrevious } from "../Hook/UsePrevious";

const HookCustom = () => {
    const [number, setNumber] = useState(0);
    const previousValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar!</button>
      <hr />
    </div>
  );
};

export default HookCustom;

/* ============================================================================
   RESUMO CONCEITUAL: CUSTOM HOOKS E useDebugValue
   ============================================================================

   1. O QUE SÃO CUSTOM HOOKS (HOOKS PERSONALIZADOS)?
      - São funções JavaScript criadas por você que compartilham lógica com estado 
        entre componentes React.
      - Devem obrigatoriamente iniciar com a palavra `use` (ex: `usePrevious`, 
        `useFetch`, `useAuth`) para que o React aplique as regras gerais de Hooks.
      - Permitem abstrair regras de negócio complexas, modularizar código e 
        reaproveitar lógica em múltiplos componentes da aplicação.

   2. FLUXO DO CUSTOM HOOK `usePrevious`
      - O `useRef` mantém a referência do dado em memória sem forçar um re-render.
      - No ciclo de renderização:
        1º O hook retorna `ref.current` (que ainda guarda o valor ANTIGO).
        2º O JSX do componente é renderizado na tela.
        3º O `useEffect` é executado por último e atualiza `ref.current = value` 
           preparando o estado para a próxima mudança.

   3. O HOOK DEBUGER: `useDebugValue`
      - É um Hook nativo do React projetado para ser usado DENTRO de Custom Hooks.
      - Permite exibir um rótulo/valor explicativo para o seu Custom Hook dentro 
        da extensão "React Developer Tools" do navegador, facilitando a depuração.
   ============================================================================ */