import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function BlogCardFull({blog}) {

  return (
    <Card id={`${blog.id}`}>
      <Title>{blog.title}</Title>
      {/* Using ReactMarkdown to parse and display blog content */}
      <ReactMarkdown 
        children={blog.content}
        components={{
          code({ node, inline, className, children, ...props }) {
            return (
              <div className="highlightRoot">
                { inline 
                  // if the DOM element is inline - display it using 
                  // the inlineCode class CSS style
                  ? (
                      <MiniCard className='inlineCode' variant='outlined'>
                          <code >{children}</code>
                      </MiniCard>
                    )
                  // if the DOM element is not inline display it using 
                  // the SyntaxHighlighter plugin
                  : ( 
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        language={"ruby"}
                        style={tomorrow}
                        {...props}
                      /> 
                    )
                }
              </div>
            )
          },
        }}
      />
    </Card>
  )
}

const Card = styled.div`
  max-width: 85%;
  min-width: 25%;
  margin-bottom: 100px;
  margin-right: 80px;

  @media (max-width: 500px) {
    margin-right: 40px;
  }

  * {
    .inline-code-block {
      display: inline-block;
      padding: 2px 4px;
      color: #232629;
      background-color: #e3e6e8;
      border-radius: 3px;
    }

    .highlightRoot {
      display: inline;
    }

    .inlineCode {
      display: inline;
      padding: 2px 4px;
      background-color:  #2d2d2d;
      color: rgba(255, 255, 255, 1.0);
      border-radius: 4px;
    }
  }
`

const MiniCard = styled.div`
`

const Title = styled.h5`
  font-size: 33px;
  margin-bottom: 12px;
`

export default BlogCardFull