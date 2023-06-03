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
        {   !projectData
            ? <p>"loading"</p>
            : <>
                <TextBox>
                    <TitleBox>
                        <h3>{projectData.title}</h3>
                    </TitleBox>
                    <InfoBox>
                        <InfoBlurb>{projectData.blurb}</InfoBlurb>
                    </InfoBox>
                </TextBox>
                <Image src={projectData.image}/>
              </>
        }
    </Card>
  )
}

const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 12px;
    margin: 12px;
    margin-bottom: 24px;
    max-width: 1000px;
    min-width: 500px;
    background: var(--text);
    border-radius: 5px;
    
    *{
        color: black;
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 12px;
    width: 60%;
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
    width: 45%;
    height: auto;
    border: 2px black;
    border-radius: 5px;
    display: inline;
`

const TitleBox = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 24px;
`


const h1 = styled.h1`
    color: red;
`

export default ProjectCard