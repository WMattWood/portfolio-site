import styled from "styled-components"

function BlogCard({blog}) {
  return (
    <Card>
        <Title>{blog.title}</Title>
        <BlogPreview>{blog.content.substring(0, 600)}</BlogPreview>
        <a href="https://google.com"><Keyword>(...)</Keyword></a>
    </Card>
  )
}

const Card = styled.div`
  /* max-width: 85%; */
  min-width: 25%;
  margin-bottom: 12px;
  margin-right: 24px;

  @media (min-width: 1220px) {
    /* max-width: 100%; */
    /* margin-right: 40px; */
  }
`

const Title = styled.h4`
  margin-bottom: 12px;
`

const BlogPreview = styled.p`
  position: relative;
  width: 100%;
`

const Keyword = styled.b`
  background: transparent;
  font-weight: 600;
  color: var(--highlight-bright);
`

export default BlogCard