

function ProjectForm(){
    return(
        <form >
            <div>
                <label htmlFor="name">Nome do projeto:</label>
                <input type="text" placeholder="Nome do projeto" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="budget">Orçamento:</label>
                <input type="number" placeholder="Orçamento" id="budget" name="budget" />
            </div>
            <div>
                <label htmlFor="category_id">Categoria:</label>
                <select name="category_id" id="category_id">
                    <option value="" disabled selected>Selecione uma categoria</option>
                    <option value="1">Categoria 1</option>
                    <option value="2">Categoria 2</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm