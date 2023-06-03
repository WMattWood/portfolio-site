import styled from "styled-components"

function BlogCard({blog}) {
  return (
    <Card>
        <h4>{blog.title}</h4>
        <p>{blog.content.substring(0, 600)}</p>
        <a href="https://google.com">...</a>
    </Card>
  )
}

const Card = styled.div`
  min-width: 280px;
  margin: 12px;
`

export default BlogCard