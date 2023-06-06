import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function BlogCardFull({blog}) {

  const cssMarkdownCodeblock = `CSS code example:
 
  \`\`\`css
  .container{
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
   
  .child-1{
    background-color: red;
  }
   
  .child-2{
    background-color: blue;
  }
   
  \`\`\`

  Ruby code example:
 
  ~~~ruby
  .container{
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
   
  .child-1{
    background-color: red;
  }
   
  .child-2{
    background-color: blue;
  }
   
  ~~~
  `;



  return (
    <Card>
        <Title>{blog.title}</Title>
        <ReactMarkdown 
          // children={cssMarkdownCodeblock}
          children={blog.content}
          components={{
            code({ node, inline, className, children, ...props }) {
                return <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={"ruby"}
                  style={tomorrow}
                  {...props}
                /> 
            },
          }}

    
          // components={{
          //   code({ node, inline, className, children, ...props }) {
          //     const match = /language-(\w+)/.exec(className || "");
          //     return !inline && match ? (
          //       <SyntaxHighlighter
          //         showLineNumbers={"true"}
          //         children={String(children).replace(/\n$/, "")}
          //         language={match[1]}
          //         style={tomorrow}
          //         {...props}
          //       />
          //     ) : (
          //       <code className={className} {...props}>
          //         {children}
          //       </code>
          //     );
          //   },
          // }}

          // components={{
          //   code({ node, inline, className, children, ...props }) {
          //     const match = /language-(\w+)/.exec(className || "");
          //     if ( !inline && match ) {
          //       return ( <SyntaxHighlighter
          //                 showLineNumbers={"true"}
          //                 children={String(children).replace(/\n$/, "")}
          //                 language={match[1]}
          //                 style={tomorrow}
          //                 {...props}
          //               /> 
          //             )
          //     } else if ( inline ) {
          //       return ( <code className={`${className} inline-code`} {...props}>
          //                  {children}
          //                </code> 
          //               )
          //     } else { 
          //       return ( 
          //         <code className={className} {...props}>
          //           {children}
          //         </code>
          //       )
          //     };
          //   },
          // }}
          
/>
        <a href="https://google.com"><Keyword>(...)</Keyword></a>
    </Card>
  )
}



// const Component = () => {
//   const codeString = '(num) => num + 1';
//   return (
//     <SyntaxHighlighter language="javascript" style={docco}>
//       {codeString}
//     </SyntaxHighlighter>
//   );
// };

const Card = styled.div`
  max-width: 85%;
  min-width: 25%;
  margin-bottom: 12px;
  margin-right: 80px;

  /* @media (min-width: 1220px) {
    max-width: 100%;
  } */

  * {
    .inline-code {
      display: inline-block;
      padding: 2px 4px;
      color: #232629;
      background-color: #e3e6e8;
      border-radius: 3px;
    }
  }
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