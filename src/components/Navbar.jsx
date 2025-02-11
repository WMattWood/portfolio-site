import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
// import Hamburger from "../assets/hamburger.svg";
import Hamburger from "../assets/hamburger.svg?react";
import Pdf from "../assets/Matthew_Wood_CV.pdf";
import Toggle from './Toggle';

const Navbar = ({theme, toggleTheme}) => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);

    return (
        <Header>
            <ToggleBox>
                <Toggle checked={theme === "dark"} onChange={toggleTheme}>Switch Theme</Toggle>
            </ToggleBox>

            <MediaQuery minWidth={840}>
                <FrameHorizontal>
                    <Link onClick={() => navigate("/")}>Home</Link>
                    {/* <Link onClick={() => navigate("/about")}>About</Link> */}
                    <Link onClick={() => navigate("/projects")}>Projects</Link>
                    {/* <Link onClick={ () => navigate("/blog")}>Blog</Link> */}
                    {/* <Link onClick={() => navigate("/#contact")}>Contact</Link> */}
                    <FileLink href={Pdf}>
                        <Link>CV</Link>
                    </FileLink>
                </FrameHorizontal>
            </MediaQuery>

            <MediaQuery maxWidth={840}>
                <FrameVertical>
                    {/* <Icon src={Hamburger} onClick={() => setShowNav(!showNav)} /> */}
                    <Hamburger onClick={() => setShowNav(!showNav)} width="44px" fill="var(--tertiary)" />
                    <Link className={showNav ? "clicked" : null} onClick={() => navigate("/t")}> Home </Link>
                    {/* <Link className={showNav ? "clicked" : null} onClick={() => navigate("/about")}> About </Link> */}
                    <Link className={showNav ? "clicked" : null} onClick={() => navigate("/projects")}> Projects </Link>
                    {/* <Link className={ showNav ? "clicked" : null } onClick={ () => navigate("/blog")}>Blog</Link> */}
                    {/* <Link className={showNav ? "clicked" : null} onClick={() => navigate("/#contact")} > Contact </Link> */}
                    <FileLink href={Pdf}> <Link className={showNav ? "clicked" : null}>CV</Link> </FileLink>
                </FrameVertical>
            </MediaQuery>
        </Header>
    );
};

// STRUCTURE
const Header = styled.header`
    position: relative;
    height: 120px;
    font-size: 20px;
`;

const FrameHorizontal = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const FrameVertical = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;

    .clicked {
        transition: 0.5s;
        margin: 6px;
        visibility: visible;
        opacity: 1;
    }
`;

// ELEMENTS
const ToggleBox = styled.div`
    position: absolute;
    top: 7px; 
    left: 5px; 
`;

const Link = styled.h5`
    cursor: pointer;
    margin: 12px 0px 12px 24px;
    z-index: 1;
    border-radius: 5px;
    padding: 5px;

    transition: 0.1s;
    :hover {
        background: var(--tertiary);
        color: white;
        transition: 0.1s;
    }

    @media (max-width: 840px) {
        transition: 0.5s;
        margin: -9px;
        visibility: hidden;
        opacity: 0;
    }
`;

const FileLink = styled.a`
    text-decoration: none;
    z-index: 1;
`;

const Icon = styled.img`
    width: 34px;
    cursor: pointer;
`;

export default Navbar;
