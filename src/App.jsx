
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from './pages/AboutPage'
import Blogpage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ScrollToTop from './utilities/ScrollToTop';
import GlobalStyle from './GlobalStyles'

function App() {

  return (
    <div class="container">
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
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
