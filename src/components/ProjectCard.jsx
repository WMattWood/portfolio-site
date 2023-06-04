import {useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../GlobalContext'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import {micromark} from 'micromark'



const ProjectCard = ({name}) => {

    const { accessToken } = useContext(GlobalContext)

    const [blurb, setBlurb] = useState(null)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null)
    const [projectData, setProjectData] = useState(null)
    const [markdown, setMarkdown] = useState(null)
    const [markdownHTML, setMarkdownHTML] = useState(null)

    useEffect( () => {
        // fetch(`https://raw.githubusercontent.com/wmattwood/${name}/main/README.md`)
        //     // .then( res => res.json() )
        //     .then( res => res.text())
        //     .then( res => res.substring(0, 600) + "...")
        //     .then( res => setBlurb(res))

        // fetch("https://api.github.com/graphql", {
        //     "method": "POST",
        //     "headers": {
        //       // "Content-Type": "application/json",
        //       "Authorization": `Bearer ${accessToken}`,
        //     },
        //     "body": JSON.stringify({
        //         query:    `query { repository(owner: "wmattwood", name: "${name}") {
        //                             openGraphImageUrl
        //                         }
        //                     }`
        //         })
        //     })
        //     .then( res => res.json() )
        //     .then( res => setImage(res.data.repository.openGraphImageUrl)
        // )

        fetch("https://api.github.com/graphql", {
            "method": "POST",
            "headers": {
              // "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`,
            },
            "body": JSON.stringify({
                query:    `query { repository(owner: "wmattwood", name: "${name}") {
                                    openGraphImageUrl,
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
                    // setTitle(doc.querySelectorAll('h1')[0].textContent)
                    // setBlurb(doc.querySelectorAll('p')[0].textContent)
                    // setImage(res.data.repository.openGraphImageUrl)
                    setProjectData( {
                            title: doc.querySelectorAll('h1')[0].textContent,
                            image: res.data.repository.openGraphImageUrl,
                            blurb: doc.querySelectorAll('p')[0].textContent.substring(0, 500) + "..."
                        }
                    )
                }
            )
        

    }, [])

    // useEffect( () => {
    //     const el = document.querySelector('.react-markdown');
    //     if (el) {
    //         const mdHTML = el.childNodes;
    //         setMarkdownHTML( {
    //             "title": mdHTML[0],
    //             "blurb": mdHTML[1]
    //         })
    //     }
    // }, [markdown])

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
          <a href="https://github.com/WMattWood">
            <Button>View Live</Button>
          </a>
        </TextBox>
        <Image src={projectData.image}/>
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
    padding: 12px;
    margin-right: 24px;;
    /* margin: 12px; */
    margin-bottom: 24px;
    /* max-width: 1000px;
    min-width: 500px; */
    background: var(--text);
    border-radius: 5px;
    
    @media (min-width: 840px) {
        flex-direction: row;

    }

    *{
        color: black;
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
`
const ImageFrame = styled.div`   
`
const Image = styled.img`
    position: relative;
    max-width: 500px;
    width: 90%;
    height: auto;
    border: 2px black;
    border-radius: 5px;
    display: inline;

    @media (min-width: 840px) {
        width: 45%;
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
  /* margin-bottom: 12px; */
  font-weight: 700;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 500px) {
    font-size: 1.8em;
  }
`


const h1 = styled.h1`
    color: red;
`

const Button = styled.button`
  padding: 12px;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, .2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  

  &:hover {
    background-color: var(--highlight-bright);
    box-shadow: 0px 3px 7px rgba(46, 229, 157, 0.4);
    color: var(--highlight-dark);
    transform: translateY(-1px);
  }
`
export default ProjectCard