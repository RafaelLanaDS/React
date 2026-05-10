import Button from "./eventos/Button"


function Evento(){
    function MeuEvento(){
        console.log('ativando meu primeiro evento')
    }
    function segundoEvento(){
        console.log('ativando meu segundo evento')
    }
    return(
        <>
            <Button event={MeuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </>
    )
}

export default Evento


eventos 

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

