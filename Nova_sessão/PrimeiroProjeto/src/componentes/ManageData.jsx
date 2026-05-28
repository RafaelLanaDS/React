import { useState } from "react";

// useState → guarda valores e atualiza a tela quando mudam
// variável normal → muda o valor mas NÃO atualiza a tela

const ManageData = () => {

    let someData = 10; // ❌ variável normal - tela não atualiza

    const [number, setNumber] = useState(15);
    //     ↑           ↑              ↑
    //   valor      função p/      valor inicial
    //   atual       mudar         (aparece na tela)

    return (
        <div>
            <div>
                <p>Variavel: {someData}</p>
                <button onClick={() => (someData = 15)}>
                    Mudar variavel {/* ❌ não reflete na tela */}
                </button>
            </div>
            <div>
                <p>State: {number}</p>
                <button onClick={() => setNumber(35)}>
                    Mudar o state {/* ✅ atualiza a tela! */}
                </button>
            </div>
        </div>
    )
}

export default ManageData

// Resumo em 3 linhas para o caderno:

// useState(valorInicial) → define o valor que aparece primeiro
// setNome(novoValor) → muda o valor e atualiza a tela
// Variável comum nunca atualiza a tela, sempre use useState! 🚀