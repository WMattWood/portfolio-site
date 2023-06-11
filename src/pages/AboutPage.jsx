import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function AboutPage() {

  const navigate = useNavigate()

  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <Contents>
          <Title>About me</Title>
          <SectionContainer>
            {/* <BlurbBox> */}
              <Blurb>I have been using computers to learn, create and explore since I was a kid.  
                My first access to computerized networks was through BBS systems ( Dragon's Lair!)
                and some of my earliest memories were playing a copy of Rogue on my grandparents' 
                old Macintosh. Over the past 20 years I've used computers to create and perform 
                electronic music and computers have always been a big part of my life.
              </Blurb> 

              <Blurb>  
                In my previous career my expertise in audio and audio related software led me te 
                become a source of technical expertise in North America for some of the world's
                top professional audio brands. I truly loved working with audio! But after solving 
                problems related to all kinds of professional audio equipment and software for over 
                10 years I had finally started to feel as though I had run out of new things to learn. 
              </Blurb>

              <Keyword>I wanted a new challenge!</Keyword>

              <Blurb>
                This is where my coding journey really began. My learning process in software
                started with exploring the domain, spending several weeks just reading about code. 
                I learned about common languages (Java, Javascript, Ruby, Python, C#, C++, C), the 
                kinds of software used (VSCode, Atom, Notepad++), and common techniques and terms
                (Version Control, Looping, O.O.P, Recursion, Data Structures). After several months 
                of taking Codecademy courses during the evenings and weekends, I realized that I had 
                a genuine passion for programming. The most enjoyable parts of my day were when I 
                would brew a pot of tea, put on some ambient background noise, and spend a few solid 
                hours in an almost meditative zone of study and practice. At times it was frustrating, 
                but that made the reward of solving a problem that much more enjoyable.
              </Blurb>

              <Keyword>I loved working with code.</Keyword>

              <Blurb>
                The decision was made to pursue software development as a new career path. I signed up 
                with an online learning program called Launch School and spent the better part of two 
                years in their program building up my fundamentals. This was one of the best decisions 
                I made. Launch School was designed not just to teach you "enough to get a job", but rather
                was focused on teaching a mastery of the subject matter. I developed an intuitive understanding 
                for topics like "Pass by reference vs. Pass by value", "Polymorphism/Encapsulation/Inheritance",
                and "Mutation vs. Assignment". I also became comfortable using Git and the CLI and even spent
                time learning how to properly navigate documentation. These were all important concepts 
                which I felt could be easily missed in a high speed Bootcamp environment. Taking the time to 
                really understand these topics was invaluable.
              </Blurb>

              <Blurb> By the end of 2022, I finally felt ready to attempt a high-paced Bootcamp. These 12 weeks
                were some of the most intense weeks of my life! By the end of it, I came out with a strong 
                mental model for a modern React based SPA design, as well as a strong comprehension of what 
                goes into Frontend and Back End elements of web development. Since the completion of that 
                program I have continued learning on my own, building new projects and expanding my hands 
                on experience while searching for my next role in software development.
              </Blurb>

            {/* </BlurbBox> */}
            <Keyword>Does this sound like someone you could work with?</Keyword>
            <ContactLink href="mailto:w.matthew.wood@gmail.com" target="blank">Let's get in touch!</ContactLink>
          </SectionContainer>

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

const Title = styled.h3`
  margin-top: 24px;
  /* font-size: 44px; */
  width: 250px;
`

const Header = styled.div`
  height: 100px;
  background: linear-gradient(var(--highlight-dark), 90%, #7a99a7);
`

const Footer = styled.div`
  height: 200px;
  background: linear-gradient(#19376D, 10%, var(--highlight-dark));
`

// Page Specific Elements
// const BlurbBox = styled.div`
//   font-size: 16px;
//   line-height: 18px;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   flex-wrap: wrap;
//   margin-bottom: 24px;
//   width: 100%;

//   /* @media (min-width: 840) {
//     width: 500px;
//   } */
// `

const BlurbBox = styled.div`
  margin-bottom: 40px;
`

const Blurb = styled.p`
  margin-bottom: 24px;
  /* width: 100%; */
  /* margin-right: 48px; */

  @media (min-width: 840) {
    width: 500px;
  }
`

const SectionContainer = styled.div`
  width: 90%;
  /* font-size: 18px; */
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 50px;
`




//Shared Elements
const Keyword = styled.p`
  background: transparent;
  margin-bottom: 24px;
  font-weight: 600;
  color: var(--highlight-bright);
`

const Contact = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
`
const ContactLink = styled.a`
  cursor: pointer;
  text-decoration: none var(--highlight-bright);
  background: transparent;
  font-weight: 600;
  color: var(--highlight-bright);
  font-size: 33px;
  text-decoration: underline;

  :hover{
    transition: 0.5s;
    color: magenta;
    text-decoration: underline magenta;
  }
`

export default AboutPage