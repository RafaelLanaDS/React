import styles from './NewProject.module.css'
import ProjectForm from '../Project/Project.form'

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject