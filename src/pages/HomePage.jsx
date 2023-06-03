import { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import headshot from '../assets/headshot.jpeg'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../GlobalContext'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Email from '../assets/email.svg'
import Startrek from '../assets/startrek.svg'
import Pdf from '../assets/Matthew_Wood_CV.pdf';

function HomePage() {

  const { projects, blogs, accessToken } = useContext(GlobalContext)
  const listOfSkills = [ "Javascript", "CSS", "HTML", "Ruby", "Ruby on Rails", "SQL", "PostgresQL", "Node.js", "React", "Python",
                        "Jest", "Mocha", "Minitest", "CLI", "Github", "MongoDB", "Firebase", "Zoho CRM", "GraphQL", "REST"]   

  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <Contents>
          <MyIntro>
            <TopBox>
              <TopBoxLeft>
                <MainTitle>Matthew Wood</MainTitle>
                <Subtitle>Software Engineer</Subtitle> 
                <IconsBox>
                  <Link href="https://github.com/WMattWood" target="blank"> 
                    <Icon src={Github} alt="Github Icon" /> 
                  </Link>
                  <Link href="https://www.linkedin.com/li/WMattWood" target="blank"> 
                    <Icon src={Linkedin} alt="Linkedin Icon" /> 
                  </Link> 
                  <Link href="mailto:w.matthew.wood@gmail.com" target="blank"> 
                    <Icon src={Email} alt="Generic Email Icon" /> 
                  </Link>  
                  <Link href="https://www.youtube.com/watch?v=ZPoqNeR3_UA" target="blank"> 
                    <IconTrek src={Startrek} alt="Startrek Icon" /> 
                  </Link>  
                </IconsBox> 
                <IntroBlurb>
                  <p>It's nice to meet you!</p>
                  <br/>
                  <p>Lifelong learner, unstoppable problem solver, creator of solutions.  </p>
                  <p>I like working with Ruby, Python, and Javascript.</p> 
                  <p>Systemic world-view kinda guy.</p>
                  <br/>
                  <br/>
                  <br/>
                  <PdfLink href={Pdf}>Check out my CV here!</PdfLink>
                
                </IntroBlurb>
              </TopBoxLeft>
              <TopBoxRight>
                <HeadshotBox>
                  <Headshot src={headshot}/>
                </HeadshotBox>
              </TopBoxRight>
            </TopBox>
          </MyIntro>

          <MySkills>
            <TitleBox>
              <SectionTitle>My Skills</SectionTitle>
            </TitleBox>
            <SkillsBox>
              <SkillsListBox>
                {listOfSkills.map( skill => <Skill key={`${skill}`}> {skill} </Skill> ) }
              </SkillsListBox>
              <BlurbBox>
                <Blurb>I have been using computers to learn, create and explore since I was a kid.  
                  My first access to computerized networks was through BBS systems ( Dragon's Lair!) and some of my earliest memories were playing a copy of Rogue on
                  my grandparent's old Macintosh.  Over the past 20 years I've used computers
                  to create and perform electronic music - and in the past 5 I decided to 
                  focus full time on digging into the code behind the software that I've used
                  for so long.  
                </Blurb>

                <Keyword>More about me...</Keyword>
              </BlurbBox>
            </SkillsBox>

          </MySkills>

          <MyBlog>
            <TitleBox>
              <SectionTitle>My Blog</SectionTitle>
            </TitleBox>
            { ! blogs
              ? <p>"Loading"</p>
              : <BlogBox>
                  { blogs.slice(0, 3).map( blog => <BlogCard key={blog.id} blog={blog}/> ) }
                </BlogBox>
            }
          </MyBlog>
          
          <MyProjects>
            <TitleBox>
              <SectionTitle>My Projects</SectionTitle>
            </TitleBox> 
            { ! projects
              ? <p>"Loading"</p>
              : <ProjectBox>  
                  { projects.map( (project) => <ProjectCard key={project.name} name={project.name}/> ) }
                </ProjectBox>
            }
          </MyProjects>

        </Contents>
      </Body>
      <Footer></Footer>
    </div>
  )
}

const MyIntro = styled.div`
  margin-bottom: 84px;
  margin-right: 48px;
`
const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-right: 24px; */
`
const TopBoxLeft = styled.div`
  width: 100%;
  @media (min-width: 840px) {
      width: 60%;
      display: inline;
    }
`
const TopBoxRight = styled.div`
  width: 0%;
  display: none;

  @media (min-width: 840px) {
      width: 35%;
      /* display: block; */
      display: flex;
    }
`

const PdfLink = styled.a`
  text-decoration: none var(--highlight-bright);
  background: transparent;
  font-weight: 600;
  /* text-decoration-color: magenta; */
  color: var(--highlight-bright);
  /* text-decoration-color: var(--highlight-bright); */

  :hover{
    transition: 0.5s;
    color: magenta;
    text-decoration: underline magenta;
  }
`

const Highlight = styled.em`
  /* font-size: 24px; */
  /* border-bottom: 2px solid var(--text); */
  /* border-bottom: 3px solid red; */
  /* box-sizing: border-box; */
  /* border: 2px solid red; */
  /* padding: 0px; */
  /* line-height: 20px; */
  /* margin-bottom: 5px; */
`
const MySkills = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 50px;
  /* margin-right: 48px; */

  @media (min-width: 840px) {
      align-items: start;
    } 
`

const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 50px; */
  @media (min-width: 840px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: start;
    } 
`
const BlurbBox = styled.div`
  font-size: 16px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  /* max-width: 650px; */
  margin-bottom: 24px;
  /* width: 65%; */
  width: 100%;

  @media (min-width: 840) {
    /* max-width: 500px; */
    /* width: 65%; */
    /* min-width: 5000px; */
    width: 500px;
  }
`

const Blurb = styled.p`
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: 840) {
    /* max-width: 500px; */
    /* width: 65%; */
    width: 500px;
    /* width: 500px; */
  }
`
const SkillsListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  min-width: 300px;
  margin-bottom: 24px;
  /* width: 35%; */

  @media (min-width: 840) {
    max-width: 500px;
    width: 35%;
  }
`
const Skill = styled.div`
  background: black;
  color: var(--highlight-bright);
  border-radius: 5px;
  padding: 5px;
  margin: 3px;

  transition: 0.5s;
  :hover{
    color: magenta;
    transition: 0.5s;
  }
`
const MyBlog = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 50px;
  margin-right: 48px;
`

const BlogBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1220px) {
      flex-direction: row;
    }
`

const MyProjects = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-left: 12px;
  margin-bottom: 50px;
`


const IconsBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
`

const IntroBlurb = styled.div`
  *{
    font-size: 20px;
    line-height: 28px;
    margin: 5px;
  }
`

const WorkingStatus = styled.p`
  
`

const Link = styled.a`
  color: green;
`
const Icon = styled.img`
  width: 34px;
`

const IconTrek = styled.img`
  width: 44px;
  position: relative;
  top: -10%;
`


const TitleBox = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 24px;
`

const HeadshotBox = styled.div`
  /* position: relative; */
  /* top: 50%; */
  margin-top: 24px;
  /* left: 50%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-bottom: 24px; */
  /* margin-right: 50px; */
`
const Headshot = styled.img`
  /* width: 300px; */
  width: 90%;
  box-sizing: border-box;
  border: 3px solid black;
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`




const Body = styled.div`
  background: var(--dark);
  width: 100vw;
  /* padding: 12px; */
  padding-bottom: 12px;
  padding-left: 5%;
  padding-right: 5%;
    
  /* *{
    flex-direction: col;
    align-items: start;
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
    }
  } */
`

const Contents = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`



const Header = styled.div`
  height: 200px;
  background: linear-gradient(var(--highlight-dark), 90%, #7a99a7);
`

const Footer = styled.div`
  height: 200px;
  background: linear-gradient(#19376D, 10%, var(--highlight-dark));
`

const MainTitle = styled.h1`
  /* margin-left: 12px; */
`

const Subtitle = styled.h2`
  /* margin-left: 12px; */
  margin-bottom:20px;
`

const SectionTitle = styled.h3`
  
`

const H2box = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */

  /* @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  } */
`



const Button = styled.button`
  padding: 12px;
  font-size: 14px;
  margin: 12px;
  width: 140px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
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

const ProjectBox = styled.div`
  margin-left: 0px;
`

const Card = styled.div`
  background: var(--paragraph-box);
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  /* justify-content: left; */
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 12px;
  * {
    background: transparent;
  }
`

const CardText = styled.div`

`

const Keyword = styled.b`
  background: transparent;
  font-weight: 600;
  color: var(--highlight-bright);
`

export default HomePage