import styled from 'styled-components'
import Navbar from '../components/Navbar'

function ProjectPage() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <Contents>

        </Contents>
      </Body>
      <Footer>

      </Footer>
    </div>
  )
}

//Page Structure Elements
const Body = styled.div`
  background: var(--dark);
  width: 100vw;
  padding-bottom: 12px;
  padding-left: 5%;
  padding-right: 5%;
`

const Contents = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Header = styled.div`
  height: 100px;
  background: linear-gradient(var(--highlight-dark), 90%, #7a99a7);
`

const Footer = styled.div`
  height: 200px;
  background: linear-gradient(#19376D, 10%, var(--highlight-dark));
`

//Shared Elements
const TitleBox = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 24px;
`
const SectionTitle = styled.h3`
`

export default ProjectPage