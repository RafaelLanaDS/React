import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef(); // Correção pequena: chamar como função useRef()

  useEffect(() => {
    ref.current = value; // Atualiza o valor armazenado APÓS a renderização
  });

  useDebugValue(ref.current); // Exibe o valor anterior na extensão React DevTools

  return ref.current; // Retorna o valor antigo (da renderização anterior)
};