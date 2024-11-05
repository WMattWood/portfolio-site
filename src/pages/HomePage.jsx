import { useEffect, useContext, useRef} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
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

  const ref = useRef(null)
  const navigate = useNavigate()
  const { pathname, hash, key } = useLocation();
  const { projects, blogs } = useContext(GlobalContext)
  const listOfSkills = [ "Javascript", "CSS", "HTML", "Ruby", "Ruby on Rails", "SQL", "PostgresQL", "Node.js", "React", "Python",
                        "Jest", "Mocha", "Minitest", "CLI", "Github", "MongoDB", "Firebase", "Zoho CRM", "GraphQL", "REST"]   

  
  // Manage direct scroll to hash id on page load
  const scrollToElement = () => {

    // if hash present, execute scroll
    if (hash !== '') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      // REF TECHNIQUE WITH A 500ms LOWER BOUND FOR UNIFORM UI EXPERIENCE
      setTimeout( () => {
        if (ref.current ) {
          window.scrollTo( {
            behavior: element ? "smooth" : "auto",
            top: element ? document.body.scrollHeight : 0
          })
        }
      }, 500)
    }
  }

  useEffect( () => {
    scrollToElement()
  }, [pathname, hash, key] )

  return (
    <div class="container">
      
        <Navbar/>
      

        {/* <Contents> */}
          <MyIntro>
            <TopBox>
              <TopBoxLeft>
                <h1>Matthew Wood</h1>
                <h2>&nbsp;Fullstack Developer</h2>
                <IconsBox>
                  <IconLink href="https://github.com/WMattWood" target="blank"> 
                    <Icon src={Github} alt="Github Icon" /> 
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/WMattWood" target="blank"> 
                    <Icon src={Linkedin} alt="Linkedin Icon" /> 
                  </IconLink> 
                  <IconLink href="mailto:w.matthew.wood@gmail.com" target="blank"> 
                    <Icon src={Email} alt="Generic Email Icon" /> 
                  </IconLink>  
                  <IconLink href="https://www.youtube.com/watch?v=ZPoqNeR3_UA" target="blank"> 
                    <IconTrek src={Startrek} alt="Startrek Icon" /> 
                  </IconLink>  
                </IconsBox> 
                <IntroBlurb>
                  <SubBlurb>
                    {/* <p>Web developer with expertise in legacy system migration and managing small teams.  Specializing in translation of complex systems.</p>  */}
                    <p>Web developer specializing in translation and documentation of complex systems.</p>
                  </SubBlurb>
                  <PdfLink href={Pdf}>Check out my CV here</PdfLink>
                
                </IntroBlurb>
              </TopBoxLeft>
              <HeadshotBox>
                <Headshot src={headshot}/>
              </HeadshotBox>
            </TopBox>
          </MyIntro>

          <SectionContainer>
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
                  to create and perform electronic music - and in the past 5 years I decided to 
                  focus full time on digging into the code behind the software that I've used
                  for so long.  
                </Blurb>

                <PdfLink onClick={ () => navigate("/about")}>More about me...</PdfLink>
              </BlurbBox>
            </SkillsBox>

          </SectionContainer>

          <SectionContainer>
            <TitleBox>
              <SectionTitle>My Projects</SectionTitle>
            </TitleBox> 
            { ! projects
              ? <p>"Loading"</p>
              : <ProjectBox>
                  { projects.map( (project) => <ProjectCard key={project.name} name={project.name}/> ) }
                </ProjectBox>
            }
          </SectionContainer>

          <SectionContainer>
            <TitleBox>
              <SectionTitle>My Blog</SectionTitle>
            </TitleBox>
            { ! blogs
              ? <p>"Loading"</p>
              : <BlogBox ref={ref}>
                  { blogs.slice(0, 3).map( blog => <BlogCard key={blog.id} blog={blog}/> ) }
                </BlogBox>
            }
          </SectionContainer>
          
          <SectionContainer>
            <Contact id="contact" >Want to get in touch?  <ContactLink href="mailto:w&period;matthew&period;wood&commat;gmail&period;com" target="blank"> Let's chat!</ContactLink> </Contact>
          </SectionContainer>
        {/* </Contents> */}
   
      <Footer></Footer>
    </div>
  )
}

//Page Structure Elements
const Body = styled.div`
  padding-bottom: 12px;
`

const Contents = styled.body`
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    margin-left: 0px;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
  margin-bottom: 50px;

  @media (max-width: 500px) {
      margin-bottom: 40px;
    } 
`

const Header = styled.div`
  height: 240px;
  background: var(--secondary);

  @media (max-width: 500px) {
    height: 35vw;
  }
`
const Footer = styled.div`
  height: 200px;
  background: var(--secondary);
`
const TitleBox = styled.div`
  align-self: flex-start;
  margin-bottom: 24px;
`
const SectionTitle = styled.h3`
`



//MyIntro Elements
const MyIntro = styled.div`
  margin-bottom: 84px;


  @media (max-width: 500px) {
      margin-bottom: 74px;
    } 
`
const MainTitle = styled.h1`
`
const Subtitle = styled.h2`

`
const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`
const TopBoxLeft = styled.div`
  width: 100%;
  @media (min-width: 840px) {
      width: 60%;
      display: inline;
    }
`
// const TopBoxRight = styled.div`
//   width: 0%;
//   display: none;

//   @media (min-width: 840px) {
//       width: 35%;
//       display: flex;
//     }
// `
const IconsBox = styled.div`
  margin: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`
const IconLink = styled.a`
`
const Icon = styled.img`
  width: 34px;
`
const IconTrek = styled.img`
  width: 44px;
  position: relative;
  top: -10%;
`
const IntroBlurb = styled.div`
  *{
    font-size: 20px;
    line-height: 28px;
    margin: 5px;
  }
`
const SubBlurb = styled.div`
  margin-bottom: 51px;

  @media (max-width: 500px) {
    margin-bottom: 6vw;
  }
`
const PdfLink = styled.a`
  cursor: pointer;
  text-decoration: none var(--emphasis);
  background: transparent;
  font-weight: 600;
  color: var(--emphasis);
  font-size: 20px;
  
  :hover{
    transition: 0.5s;
    color: var(--links);
    text-decoration: underline var(--links);
  }
`
const HeadshotBox = styled.div`
  width: 50%;
  margin-left: 5%; 
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: start;
`
const Headshot = styled.img`
  max-width: 300px;
  width: 90%;
  box-sizing: border-box;
  /* border: 3px solid black; */
  border-radius: 2px;
  /* margin-right: 3px; */
`

// MySkills Section
const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 840px) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: start;
    } 
`
const BlurbBox = styled.div`
  font-size: 19px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 24px;
  font-weight: 400;

  @media (min-width: 840) {
    width: 500px;
  }
`
const Blurb = styled.p`
  margin-bottom: 24px;
  width: 100%;

  @media (min-width: 840) {
    width: 500px;
  }
`
const SkillsListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 300px;
  width: 100%;
  margin-bottom: 24px;
`
const Skill = styled.div`
  background: black;
  color: var(--emphasis);
  border-radius: 5px;
  padding: 5px;
  margin: 3px;

  transition: 0.5s;
  :hover{
    color: var(--links);
    transition: 0.5s;
  }
`

// MyProjects Section
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// MyBlog Section
const BlogBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 840px) {
      flex-direction: row;
    }
`


// Contact Section
const Contact = styled.p`
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 20px;
  line-height: 38px;
`
const ContactLink = styled.a`
  cursor: pointer;
  text-decoration: none var(--emphasis);
  background: transparent;
  font-weight: 600;
  color: var(--emphasis);
  font-size: 33px;

  :hover{
    transition: 0.5s;
    color: var(--links);
    text-decoration: underline var(--links);
  }
`

export default HomePage