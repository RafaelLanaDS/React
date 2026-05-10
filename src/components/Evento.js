function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('cadastrou usuario')
    }

    return(
        <>
            <h1>Meu Evento</h1>
            <Form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </Form>
        </>
    )
}

export default Form

function Evento(){
    function MeuEvento(){
        console.log('Fui ativado')
    }
    return(
        <>
            <p>Clique de desporar evento</p>
            <button  onClick={MeuEvento}>ativar</button>
        </>
    )
}

export default Evento