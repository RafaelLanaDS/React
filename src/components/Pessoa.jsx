
//jeito mais longo de fazer uma props
// function Pessoa(props){
//     return(
//         <div>
//             <img src="{props.foto}"/>
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissão}</p>
//         </div>
//     )
// }


// fazendo como metodo cosntrutor mesmo resultadom do decima 
function Pessoa({nome, idade, profissão, foto}){
    return(
        <div>
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissão}</p>
        </div>
    )
}

export default Pessoa 