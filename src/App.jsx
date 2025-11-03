import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
    AOS.init({ duration: 1000 });
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Sidebar toggleTheme={toggleTheme} isDarkMode={darkMode} />
      <div className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <footer className="footer">
          <p>© {new Date().getFullYear()} Revu Umamaheswara Sreerama Ajay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
