import styled from 'styled-components'
import { GlobalContext } from '../GlobalContext'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

const ProjectPage = () => {

  const { projects } = useContext(GlobalContext)

  return (
    <>
    <Navbar/>
      <Body>
        <Contents>
          <Section>
            <TitleBox>
              <SectionTitle>My Projects</SectionTitle>
            </TitleBox> 
            { ! projects
              ? <p>"Loading"</p>
              : <ProjectBox>  
                  { projects.map( (project) => <ProjectCard key={project.name} name={project.name}/> ) }
                </ProjectBox>
            }
          </Section>
        </Contents>
      </Body>
      {/* <Footer></Footer> */}
    </>
  )
}

//Page Structure Elements
const Body = styled.div`
  background: var(--secondary);
  /* width: 100vw; */
  padding-bottom: 12px;
  /* padding-left: 5%; */
  /* padding-right: 5%; */
`

const Contents = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Header = styled.div`
  height: 100px;
  background: var(--secondary);
`

const Footer = styled.div`
  height: 200px;
  background: var(--secondary);
`

const Section = styled.div`
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
      margin-bottom: 40px;
    } 
`

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

//Shared Elements
const TitleBox = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 40px;
  margin-top: 24px;
`
const SectionTitle = styled.h3`
`

export default ProjectPage