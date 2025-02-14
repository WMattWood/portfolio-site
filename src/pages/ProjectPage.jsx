import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";

import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
    const { projects } = useContext(GlobalContext);

    return (
        <>
            <Title>Projects</Title>
            <Section>
                { !projects ? ( <p>"Loading"</p> ) 
                : (
                    <ProjectBox>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                name={project.name}
                            />
                        ))}
                    </ProjectBox>
                )}
            </Section>
        </>
    );
};

// STRUCTURE
const Title = styled.h1`
    margin-bottom: 40px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        margin-bottom: 40px;
    }
`;

const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default ProjectPage;