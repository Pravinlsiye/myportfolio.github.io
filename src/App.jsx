import { useContext } from 'react'
import { ThemeContext } from './contexts/theme.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import GitHubProjects from './components/GitHubProjects/GitHubProjects.jsx'
import Skills from './components/Skills/Skills.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <GitHubProjects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
