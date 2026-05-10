import Item from './Item';

function List(){
    return(
        <>
            <h1>Minha list</h1>
            <ul>
                <Item nome='fusca' modelo='ford'/>
                <Item nome='Palio' modelo='VW'/>
            </ul>
        </>
    )
}

export default List