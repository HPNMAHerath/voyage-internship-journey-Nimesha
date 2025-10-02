import React from 'react';
import Header from './Components/Header.jsx';
import Greeting from './Components/Greeting.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';

function App() {
  
  return (
    <div>
      <Header />
      <Greeting />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
