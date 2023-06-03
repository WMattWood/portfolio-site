import { useState } from 'react'
import { BrowserRouter, Routes as Pages, Route } from "react-router-dom"
import AboutPage from './pages/AboutPage'
import Blogpage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Pages>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Pages>
    </BrowserRouter>
  )
}

export default App
