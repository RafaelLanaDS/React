import Imput from '../form/Imput'
import Select from '../form/Select'
import SubmitButton from '../form/SubimitButton'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Imput 
            type='text' 
            text='Nome do projeto' 
            name='name' 
            placeholder='Insira o nome do projeto'
            />

            <Imput 
            type='number' 
            text='Orçamento do projeto' 
            name='budget' 
            placeholder='Insira o orçamento do projeto'
            />

            <Select
            name='category_id'  
            text='Selecione a categorioa'/>

            <SubmitButton 
            text={btnText}/>
        </form>
    )
}

export default ProjectForm