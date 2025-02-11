import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle, themes } from './GlobalStyles'
import AboutPage from './pages/AboutPage'
import Blogpage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './utilities/ScrollToTop';
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  }

  return (
    <div class="container">
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle theme={themes[theme]}/>
      <Toggle checked={theme === "dark"} onChange={toggleTheme}>Switch Theme</Toggle>
      <Navbar/>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
