import React from "react"
import styled from "styled-components"
import {useNavigate} from 'react-router-dom'
import Pdf from '../assets/Matthew_Wood_CV.pdf';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <Frame>
        <Link onClick={ () => navigate("/about")}>About</Link>
        <Link onClick={ () => navigate("/projects")}>Projects</Link>
        <Link onClick={ () => navigate("/blog")}>Blog</Link>
        <Link onClick={ () => navigate("/contact")}>Contact</Link>
        <FileLink href={Pdf}><Link>CV</Link></FileLink>
    </Frame>
  )
}

const Frame = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
`

const Link = styled.h5`
  cursor: pointer;
  transition: 0.5s;
  margin: 12px;
  
  :hover{
    transition: 0.5s;
    color:red;
  }
`

const FileLink = styled.a`
  text-decoration: none;
`
export default Navbar