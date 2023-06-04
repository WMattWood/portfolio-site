import styled from "styled-components"
import ReactMarkdown from 'react-markdown'

function BlogCardFull({blog}) {
  return (
    <Card>
        <Title>{blog.title}</Title>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
        <a href="https://google.com"><Keyword>(...)</Keyword></a>
    </Card>
  )
}

const Card = styled.div`
  max-width: 85%;
  min-width: 25%;
  margin-bottom: 12px;
  margin-right: 80px;

  /* @media (min-width: 1220px) {
    max-width: 100%;
  } */
`

const Title = styled.h4`
  margin-bottom: 12px;
`

const BlogPreview = styled.p`
  
`

const Keyword = styled.b`
  background: transparent;
  font-weight: 600;
  color: var(--highlight-bright);
`

export default BlogCardFull