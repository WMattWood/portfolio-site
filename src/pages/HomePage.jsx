import { useEffect, useContext, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import headshot from "../assets/headshot.jpeg";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../GlobalContext";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Email from "../assets/email.svg";
import Startrek from "../assets/startrek.svg";
import Pdf from "../assets/Matthew_Wood_CV.pdf";

function HomePage() {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { pathname, hash, key } = useLocation();
    const { projects, blogs } = useContext(GlobalContext);
    const listOfSkills = [
        "Javascript",
        "CSS",
        "HTML",
        "Python",
        "Ruby",
        "ASP",
        ".NET",
        "VBScript",
        "Ruby on Rails",
        "SQL",
        "Node.js",
        "React",
        "Jest",
        "Mocha",
        "Minitest",
        "CLI",
        "Github",
        "MongoDB",
        "Firebase",
        "Zoho CRM",
        "GraphQL",
        "REST",
        "Azure Devops",
        "ADODB",
        "Powershell",
        "Bash/Zsh",
    ];

    // Manage direct scroll to hash id on page load
    const scrollToElement = () => {
        // if hash present, execute scroll
        if (hash !== "") {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            // REF TECHNIQUE WITH A 500ms LOWER BOUND FOR UNIFORM UI EXPERIENCE
            setTimeout(() => {
                if (ref.current) {
                    window.scrollTo({
                        behavior: element ? "smooth" : "auto",
                        top: element ? document.body.scrollHeight : 0,
                    });
                }
            }, 500);
        }
    };

    useEffect(() => {
        scrollToElement();
    }, [pathname, hash, key]);

    return (
        <>
            <Navbar />
            <Section>
                <Columns>
                    <ColumnsLeft>
                        <Name>Matthew Wood</Name>
                        <JobRole>Fullstack Developer</JobRole>
                        <IconsBox>
                            <IconLink
                                href="https://github.com/WMattWood"
                                target="blank"
                            >
                                <Icon src={Github} alt="Github Icon" />
                            </IconLink>
                            <IconLink
                                href="https://www.linkedin.com/in/WMattWood"
                                target="blank"
                            >
                                <Icon src={Linkedin} alt="Linkedin Icon" />
                            </IconLink>
                            <IconLink
                                href="mailto:w.matthew.wood@gmail.com"
                                target="blank"
                            >
                                <Icon src={Email} alt="Generic Email Icon" />
                            </IconLink>
                            <IconLink
                                href="https://www.youtube.com/watch?v=ZPoqNeR3_UA"
                                target="blank"
                            >
                                <IconTrek src={Startrek} alt="Startrek Icon" />
                            </IconLink>
                        </IconsBox>
                        <Tagline>
                            <p>
                                Web developer specializing in translation and
                                documentation of complex systems.
                            </p>
                        </Tagline>
                        <ResumeLink href={Pdf}>Check out my CV here</ResumeLink>
                        <Headshot2 src={headshot} />
                    </ColumnsLeft>
                    <Headshot src={headshot} />
                </Columns>
            </Section>

            <Section>
                <SectionTitleBox>
                    <SectionTitle>My Skills</SectionTitle>
                </SectionTitleBox>
                <Blurb>
                    4+ years of experience in a variety of languages and
                    frameworks, specializing in web development. I have worked
                    on e-commerce sites, institutional web sites, implemented
                    forms, database handlers, backend code, and worked with both
                    server side rendered web pages and client side rendered web
                    applications (SPAs).
                </Blurb>
                <SkillsListBox>
                    {listOfSkills.map((skill) => (
                        <Skill key={`${skill}`}> {skill} </Skill>
                    ))}
                </SkillsListBox>
                <ResumeLink onClick={() => navigate("/about")}>
                    More about me...
                </ResumeLink>
            </Section>

            <Section>
                <SectionTitleBox>
                    <SectionTitle>My Projects</SectionTitle>
                </SectionTitleBox>
                {!projects ? (
                    <p>"Loading"</p>
                ) : (
                    <ProjectBox>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                name={project.name}
                            />
                        ))}
                    </ProjectBox>
                )}
            </Section>

            {/* <Section>
            <SectionTitleBox>
              <SectionTitle>My Blog</SectionTitle>
            </SectionTitleBox>
            { ! blogs
              ? <p>"Loading"</p>
              : <BlogBox ref={ref}>
                  { blogs.slice(0, 3).map( blog => <BlogCard key={blog.id} blog={blog}/> ) }
                </BlogBox>
            }
          </Section> */}

            <Section>
                <Contact id="contact">
                    Want to get in touch?{" "}
                    <ContactLink
                        href="mailto:w&period;matthew&period;wood&commat;gmail&period;com"
                        target="blank"
                    >
                        {" "}
                        Let's chat!
                    </ContactLink>{" "}
                </Contact>
            </Section>
        </>
    );
}

// STRUCTURE
const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 500px) {
        margin-bottom: 40px;
    }
`;

const SectionTitleBox = styled.div`
    align-self: flex-start;
    margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
`;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
`;

const ColumnsLeft = styled.div`
    width: 60%;
    display: inline;
    @media (max-width: 550px) {
        width: 100%;
    }
`;

// INTRO
const Name = styled.h1`
`;

const JobRole = styled.h2`
    min-width: 490px;

    @media (max-width: 550px) {
        min-width: 200px;
    }
`;

const IconsBox = styled.div`
    margin: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
`;

const IconLink = styled.a`
`;

const Icon = styled.img`
    width: 34px;
`;

const IconTrek = styled.img`
    width: 44px;
    position: relative;
    top: -10%;
`;

const Tagline = styled.div`
    min-width: 490px;
    margin-bottom: 51px;
    font-size: 20px;
    line-height: 28px;

    @media (max-width: 550px) {
        margin-bottom: 6vw;
        min-width: 100%;
    }
`;

const ResumeLink = styled.a`
    cursor: pointer;
    text-decoration: none var(--tertiary);
    font-weight: 600;
    color: var(--tertiary);
    font-size: 20px;

    :hover {
        transition: 0.5s;
        color: var(--secondary);
    }
`;

const Headshot = styled.img`
    max-width: 300px;
    width: 90%;
    box-sizing: border-box;
    object-fit: cover;
    border-radius: 2px;

    @media (max-width: 895px) {
        display: none;
    }
`;

const Headshot2 = styled.img`
    max-width: 300px;
    width: 90%;
    object-fit: cover;
    border-radius: 2px;
    margin-top: 24px;
    @media (min-width: 550px) {
        display: none;
    }
`;




// SKILLS
const Blurb = styled.p`
    font-size: 19px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 24px;
    width: 100%;

    @media (min-width: 840) {
        width: 500px;
    }
`;
const SkillsListBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    min-width: 300px;
    max-width: 800px;
    margin-bottom: 24px;
`;
const Skill = styled.div`
    background: white;
    color: var(--secondary);
    border-radius: 5px;
    padding: 5px;
    margin: 3px;

    /* transition: 0.2s; */
    :hover {
        background: var(--tertiary);
        color: white;
        /* transition: 0.2s; */
        cursor: pointer;
    }
`;

// PROJECTS
const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// BLOG
const BlogBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 840px) {
        flex-direction: row;
    }
`;

// CONTACT
const Contact = styled.p`
    font-size: 33px;
    font-weight: 600;
    margin-bottom: 20px;
    line-height: 38px;
    align-self: start;
`;
const ContactLink = styled.a`
    cursor: pointer;
    text-decoration: none var(--tertiary);
    background: transparent;
    font-weight: 600;
    color: var(--tertiary);
    font-size: 33px;

    :hover {
        transition: 0.5s;
        color: var(--secondary);
        text-decoration: underline var(--secondary);
    }
`;

export default HomePage;
