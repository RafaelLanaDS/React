import { useCallback, useState } from "react";
import List from "./List";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  //   const getItemsFromDatabase = () => {
  //     return ["a", "b", "c"];
  //   };

  const getItemsFromDatabase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;

/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useCallback
   ============================================================================

   1. O QUE É O useCallback?
      - É um Hook de otimização no React usado para **memorizar a definição de uma função** 
        entre as re-renderizações de um componente.
      - Evita que uma nova instância da função seja recriada na memória a cada novo render.

   2. POR QUE ELE É NECESSÁRIO? (PROBLEMA DA REFERÊNCIA)
      - No JavaScript, funções são objetos (`() => {} !== () => {}`). Toda vez que o 
        componente `HookUseCallback` renderiza (por exemplo, ao clicar no botão do `counter`), 
        funções normais dentro dele são re-declaradas com novos endereços de memória.
      - Se essa função for repassada como prop para um filho (como o `<List getItems={...} />`), 
        o componente filho achará que a prop mudou.
      - Se o filho tiver um `useEffect` escutando essa prop (`[getItems]`), o efeito será 
        disparado desnecessariamente a cada renderização do pai, gerando re-renders indesejados.

   3. SINTAXE E ARRAY DE DEPENDÊNCIAS
      const fnMemorizada = useCallback(() => { ... }, [dependencias]);

      - Array Vazio `[]`: A função é criada apenas UMA VEZ na montagem inicial e reutilizada 
        para sempre.
      - Com Dependências `[dependencia]`: A função só é recriada se alguma das variáveis 
        declaradas no array mudar.

   4. PRINCIPAIS CASOS DE USO
      - **Otimização de Performance**: Evitar recriar funções complexas/pesadas a todo momento.
      - **Referência Estável em Props/Effects**: Quando a função é enviada para um componente 
        filho através de props e este filho a utiliza dentro de um `useEffect` (exatamente o 
        caso demonstrado no seu código).
   ============================================================================ */