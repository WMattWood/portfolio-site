import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

function BlogCard({blog}) {

  const navigate = useNavigate()

  return (
    <Card>
        <Title>{blog.title}</Title>
        <Link onClick={ () => navigate("/blog")} >
          <Text>
            <BlogPreview>{blog.content.substring(0, 300).trim()}<Keyword>...</Keyword></BlogPreview>
          </Text>
        </Link>
    </Card>
  )
}

const Card = styled.div`
  /* max-width: 85%; */
  min-width: 25%;
  margin-bottom: 40px;
  margin-right: 24px;
  /* padding: 12px; */
  /* width: 30%; */
  
  @media (min-width: 1220px) {
    /* max-width: 100%; */
    /* margin-right: 40px; */
  }
`

const Title = styled.h4`
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
`


const Text = styled.div`
  padding: 12px;
  background: var(--text);
  border-radius: 5px;
  transition: 0.1s;

  *{
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
  }

  :hover{
    transition: 0.1s;
    transform: translateY(-2px) translateX(-2px);
    /* outline: 3px solid silver; */
    box-sizing: content;
    /* box-shadow: 3px 3px 3px 1px white; */

    *{
      color: rgba(0, 0, 0, 1);
      /* -webkit-font-smoothing: none; */
    }
  }
`

const BlogPreview = styled.p`
  /* position: relative; */
  /* margin-bottom: 12px; */
  width: 100%;
`

const Keyword = styled.span`
  background: transparent;
  font-weight: 800;

`

const Link = styled.a`
  text-decoration: none;
  /* width: 30%; */
`

export default BlogCard