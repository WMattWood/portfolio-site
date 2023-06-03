import styled from "styled-components"

function BlogCard({blog}) {
  return (
    <Card>
        <Title>{blog.title}</Title>
        <BlogPreview>{blog.content.substring(0, 600)}</BlogPreview>
        <a href="https://google.com"><span>...</span></a>
    </Card>
  )
}

const Card = styled.div`
  max-width: 85%;
  min-width: 280px;
  margin-bottom: 12px;

  @media (min-width: 1220px) {
    max-width: 100%;
  }
`

const Title = styled.h4`
  margin-bottom: 12px;
`

const BlogPreview = styled.span`
  
`

export default BlogCard