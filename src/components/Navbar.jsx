import React from "react"
import styled from "styled-components"

const Navbar = () => {

  return (
    <Frame>
        <Slink>About</Slink>
        <Slink>My Projects</Slink>
        <Slink>My Blog</Slink>
        <Slink>Contact</Slink>
        <Slink>CV</Slink>
    </Frame>
  )
}

const Frame = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
`

const Slink = styled.h5`
  
  transition: 0.5s;
  margin: 12px;
  
  :hover{
    transition: 0.5s;
    color:red;
  }
`
export default Navbar