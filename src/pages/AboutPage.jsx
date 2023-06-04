import styled from 'styled-components'
import Navbar from '../components/Navbar'

function AboutPage() {
  return (
    <div>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <Contents>

            <BlurbBox>
              <Blurb>I have been using computers to learn, create and explore since I was a kid.  
                My first access to computerized networks was through BBS systems ( Dragon's Lair!) and some of my earliest memories were playing a copy of Rogue on
                my grandparent's old Macintosh.  Over the past 20 years I've used computers
                to create and perform electronic music - and in the past 5 I decided to 
                focus full time on digging into the code behind the software that I've used
                for so long.  
              </Blurb>

              <Blurb>I truly loved working with audio.  However I realized I had reached a limit for what there was to learn.
                I can say with honesty that I acheived mastery in the audio domain, but after solving problems related to all
                kinds of professional audio equipment and software for over 10 years, I had finally started to feel as though 
                I had run out of problems to solve.  
              </Blurb>

              <Keyword>I wanted a new challenge!</Keyword>

              <Blurb>My learning process began with exploring the domain.  I spent several weeks just reading about code, and 
                trying to gain a high level overview of what options were out there for someone entering the field.  What are 
                the most common languages?  (Java, Javascript, Ruby, Python, C#, C++, C) What is the common sotware used 
                (VSCode, Atom, Notepad++, Electron).  What are the essential skills?  (Git/VCS, Looping, O.O.P, Recursion, 
                Dependency Management)
              </Blurb>

              <Blurb> I spent several months while working at my former job, taking Codecademy courses during the evenings and 
                weekends, and starting to read Hackernews on the regular.  I considered taking a Bootcamp for many years, but 
                the financial cost was still out of my reach, and I wanted to make sure that I wasn't going into the Bootcamp 
                blindly.  I eventually came across Launch School online, and spent the better part of two years in their online
                learning program.  This was one of the best decisions I made - as this program was designed not to just teach you
                "enough to get a job", but instead was genuinely focused on teaching domain level mastery of the subject matter.  
              </Blurb>

              <Blurb> At launch school, I learned about things like "Pass by reference vs. Pass by value", "Polymorphism/Encapsulation",
                "Inheritance" in Object Oriented Programming, "Mutation vs. Assignment" and the concept of a "Deep vs. Shallow Copy".  
                These were all important concepts, but ones that I could tell might easily be missed in a high speed Bootcamp environment.
                I was extremely grateful for the time spent studying this material, as this laid the underlying foundation for what was 
                to come.  
              </Blurb>

              <Blurb> At the end of 2022, I finally felt ready to attempt a high paced Bootcamp.  I had saved money for months and had
                crafted a 9 month runway comprising the 3 months of bootcamp and a 6 month job hunt window.  The 12 weeks I spent in the
                Bootcamp were some of the most intense weeks of my life!  By the end of it, I came out with a strong mental model for a 
                modern React based SPA design, as well as a strong comprehension of what goes in to Frontend and Back End elements.
              </Blurb>
            </BlurbBox>

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

// Page Specific Elements
const BlurbBox = styled.div`
  font-size: 16px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 24px;
  width: 100%;

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
const Keyword = styled.b`
  background: transparent;
  font-weight: 600;
  color: var(--highlight-bright);
`

export default AboutPage