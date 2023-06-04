import styled from 'styled-components'
import { useContext } from 'react'
import Navbar from '../components/Navbar'
import BlogCardFull from '../components/BlogCardFull'
import {GlobalContext} from '../GlobalContext'

function BlogPage() {

  const { blogs } = useContext(GlobalContext)

  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <Contents>

            <TitleBox>
              <SectionTitle>My Blog</SectionTitle>
            </TitleBox>
            { ! blogs
              ? <p>"Loading"</p>
              : <BlogBox>
                  { blogs.map( blog => <BlogCardFull key={blog.id} blog={blog}/> ) }
                </BlogBox>
            }

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

//Page Specific Elements
const BlogBox = styled.div`
  display: flex;
  flex-direction: column;
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

export default BlogPage