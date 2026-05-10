import { useState } from "react" //IMPORTANDO O HOOK USESTATE PARA GERENCIAR O ESTADO DO COMPONENTE

function Condicional(){
    const [email, setEmail] = useState() //CRIANDO O ESTADO PARA GUARDAR O VALOR DO INPUT
    const [userEmail, setUserEmail] = useState() //CRIANDO O ESTADO PARA GUARDAR O NOME DO USUÁRIO

    function enviarEmail(e){
        e.preventDefault()
        console.log(`email enviado ${email}`)//MOSTRANDO O VALOR DO ESTADO NO CONSOLE
        setUserEmail(email) //ATUALIZANDO O ESTADO DO NOME DO USUÁRIO COM O VALOR DO EMAIL
    }

    function limparEmail(){
        setUserEmail('') //LIMPANDO O ESTADO DO NOME DO USUÁRIO
    }

    return(
        <>
        <h2>cadastre seu emil</h2>
        <form>
            <input type="email" 
            id="email" 
            name="email" 
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}/>{/* Pega o valor do input */}


            <button type="submit" onClick={enviarEmail}>Eviar-email</button> 
            {userEmail && ( //SE O ESTADO DO NOME DO USUÁRIO FOR VERDADEIRO, MOSTRA A MENSAGEM DE SUCESSO
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar</button>
                </div>
            )}
        </form>
        </>
    )
}

export default Condicional