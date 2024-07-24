//import { useState } from 'react'
import { NavBar } from './components/NavBar'
import './App.css'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from './components/Banner'
import Education from './components/Education'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer'
function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Banner />
      <AboutMe />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
