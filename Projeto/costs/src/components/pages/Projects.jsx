import { useLocation } from "react-router-dom";
import Message from "../Layout/Message";
import styles from "./projects.module.css"
import Container from "../Layout/Container"
import LinkButton from '../Layout/LinkButton'
import ProjectCard from '../Project/ProjectCard'

import { useState,useEffect } from "react";

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
            fetch('http://localhost:5000/projects',{
                method: 'GET',
                headers: {'Content-Type': 'application/json',},
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
        },[])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projetos</h1>
                <LinkButton to="/NewProject" text="Criar Projeto" /> 
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category}
                        key={project.id}
                    />
                ))}
            </Container>
        </div>
    );
}

export default Projects;