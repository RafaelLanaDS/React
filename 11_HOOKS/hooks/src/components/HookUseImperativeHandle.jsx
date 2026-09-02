import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;

/* ============================================================================
   RESUMO CONCEITUAL DO HOOK useImperativeHandle E forwardRef
   ============================================================================

   1. O QUE É O useImperativeHandle?
      - É um Hook avançado do React que permite personalizar o valor/funções expostas
        por uma referência (`ref`) para um componente pai.
      - Em vez de expor o elemento HTML direto ou todo o estado interno, permite criar 
        uma "interface de métodos públicos" imperativos que o componente pai pode executar.

   2. POR QUE USAR forwardRef?
      - Por padrão, referências (`ref`) não podem ser repassadas como props comuns 
        para componentes personalizados.
      - A função `forwardRef` encapsula o componente filho, permitindo que ele receba 
        a prop `ref` enviada pelo componente pai e a utilize internamente.

   3. FLUXO DE FUNCIONAMENTO NO CÓDIGO
      - O pai (`HookUseImperativeHandle`) cria a ref `inputRef` e a passa para o `<SomeComponent ref={inputRef} />`.
      - O filho envolve seu componente em `forwardRef`, capturando a `ref`.
      - Dentro do filho, `useImperativeHandle` define que a `inputRef.current` do pai 
        terá apenas o método `.validate()`.
      - Quando o botão do pai é clicado, chama `inputRef.current.validate()`, executando
        a validação interna do filho de forma imperativa.

   4. BOAS PRÁTICAS
      - O React preza pelo fluxo declarativo. O uso de imperatividade com `useImperativeHandle` 
        deve ser pontual e reservado a casos bem específicos (ex: disparar animações, 
        focar inputs, limpar formulários ou acionar scroll dentro de componentes filhos).
   ============================================================================ */