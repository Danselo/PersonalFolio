import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Nav />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Courses />
    </div>
    <Footer />

    </>
  )
}

export default App
