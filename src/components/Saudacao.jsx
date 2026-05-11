function saudacao({nome}) {
    function gerarSaudacao(algumNome) {
        return `olá ${algumNome}, seja bem vindo!`
    }

    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
export default saudacao;