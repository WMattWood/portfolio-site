import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import Hamburger from "../assets/hamburger.svg";
import Pdf from "../assets/Matthew_Wood_CV.pdf";

const Navbar = () => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);

    return (
        <Header>
            <TitleBox>
                <Title onClick={() => navigate("/")}>Home</Title>
            </TitleBox>

            <MediaQuery minWidth={840}>
                <FrameHorizontal>
                    <Link onClick={() => navigate("/about")}>About</Link>
                    <Link onClick={() => navigate("/projects")}>Projects</Link>
                    {/* <Link onClick={ () => navigate("/blog")}>Blog</Link> */}
                    <Link onClick={() => navigate("/#contact")}>Contact</Link>
                    <FileLink href={Pdf}>
                        <Link>CV</Link>
                    </FileLink>
                </FrameHorizontal>
            </MediaQuery>

            <MediaQuery maxWidth={840}>
                <FrameVertical>
                    <Icon src={Hamburger} onClick={() => setShowNav(!showNav)} />
                    <Link className={showNav ? "clicked" : null} onClick={() => navigate("/about")}> About </Link>
                    <Link className={showNav ? "clicked" : null} onClick={() => navigate("/projects")}> Projects </Link>
                    {/* <Link className={ showNav ? "clicked" : null } onClick={ () => navigate("/blog")}>Blog</Link> */}
                    <Link className={showNav ? "clicked" : null} onClick={() => navigate("/#contact")} > Contact </Link>
                    <FileLink href={Pdf}> <Link className={showNav ? "clicked" : null}>CV</Link> </FileLink>
                </FrameVertical>
            </MediaQuery>
        </Header>
    );
};

// STRUCTURE
const Header = styled.header`
    height: 120px;
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
const TitleBox = styled.div``;

const Title = styled.h5`
    cursor: pointer;
    margin-top: 12px;
    margin-left: 4px;
    position: absolute;
    transition: 0.5s;

    :hover {
        transition: 0.5s;
        color: red;
    }
`;

const Link = styled.h5`
    cursor: pointer;
    transition: 0.5s;
    margin: 12px 0px 12px 24px;
    z-index: 1;

    :hover {
        transition: 0.5s;
        color: red;
    }

    @media (max-width: 840px) {
        cursor: pointer;
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
`;

export default Navbar;
