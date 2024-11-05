import {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../GlobalContext'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import {micromark} from 'micromark'

const ProjectCard = ({name}) => {

    const { accessToken } = useContext(GlobalContext)
    const [projectData, setProjectData] = useState(null)

    useEffect( () => {
        fetch("https://api.github.com/graphql", {
            "method": "POST",
            "headers": {
              // "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
            },
            "body": JSON.stringify({
                query:    `query { repository(owner: "wmattwood", name: "${name}") {
                                    openGraphImageUrl,
                                    url,
                                    object(expression: "main:README.md") {
                                        ... on Blob {
                                            text
                                        }
                                    }
                                }
                            }`
                })
            })
            .then( res => res.json() )
            .then( res => {
                    const md = micromark(res.data.repository.object.text)
                    const doc = new DOMParser().parseFromString(md, "text/html")
                    const githubUrl = res.data.repository.url
                    const liveUrl = ( doc.querySelectorAll('a')[0] 
                                      ? doc.querySelectorAll('a')[0].href 
                                      : githubUrl 
                                    )

                    setProjectData( {
                            title: doc.querySelectorAll('h1')[0].textContent,
                            image: res.data.repository.openGraphImageUrl,
                            blurb: doc.querySelectorAll('p')[0].textContent.substring(0, 250) + "...",
                            link: liveUrl,
                            github: githubUrl
                        }
                    )
                    
                }
            )
    }, [])

  return (
    <Card>
      { !projectData
        ? <p>"loading"</p>
        : <>
            <TextBox>
              <TitleBox>
                <Title>{projectData.title}</Title>
              </TitleBox>
              <InfoBox>
                <InfoBlurb>{projectData.blurb}</InfoBlurb>
              </InfoBox>
              <a href={projectData.github}>
                <Button>View Code on Github</Button>
              </a>
            </TextBox>
            <ImageBox href={projectData.link}>
              <Image src={projectData.image}/>
            </ImageBox>
          </>
      }
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  /* padding: 20px; */
  gap: 10px;
  /* margin-right: 24px; */
  margin-bottom: 50px;
  /* background: var(--primary); */
  border-radius: 5px;
  
  @media (min-width: 840px) {
    flex-direction: row;

  }

  *{
    color: var(--text);
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 90%;

  @media (min-width: 840px) {
      width: 60%;
  }
`

const InfoBox = styled.div`
  display: flex;
`
const InfoBlurb = styled.p`
  font-size: 18px;
`

const ImageBox = styled.a`
    box-sizing: border-box;
    /* border: 2px solid red; */
    /* height: 320px; */
`
const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  /* border: 2px black; */
  border-radius: 5px;
  transition: 0.1s;

  :hover{
    cursor: pointer;
    /* transition: 0.1s;
    transform: translateX(2px); */
  }
`

const TitleBox = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 500px) {
    font-size: 1.8em;
  }
`

const Button = styled.button`
  /* padding: 12px; */
  font-size: 14px;
  /* margin-top: 12px; */
  /* margin-bottom: 12px; */
  width: 260px;
  height: 32px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, .2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  -webkit-font-smoothing: antialiased;

  &:hover {
    box-shadow: 2px 2px 10px rgba(46, 229, 157, 0.4);
    transform: translateY(-1px);
  }
`
export default ProjectCard