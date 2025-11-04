import './Sidebar.css';
import { Home, User, Star, Briefcase, FileText, Mail, Settings, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar({ toggleTheme, isDarkMode }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
     
  const navItems = [
    { href: '#hero', title: 'Home', icon: <Home />, id: 'hero' },
    { href: '#about', title: 'About', icon: <User />, id: 'about' },
    { href: '#skills', title: 'Skills', icon: <Star />, id: 'skills' },
    { href: '#projects', title: 'Projects', icon: <Briefcase />, id: 'projects' },
    { href: '#certifications', title: 'Certificates', icon: <FileText />, id: 'certifications' },
    { href: '#contact', title: 'Contact', icon: <Mail />, id: 'contact' },
  ];

  return (
    
    <div className="sidebar" id="sidebar">
      {navItems.map((item, index) => (
        <a
          href={item.href}
          title={item.title}
          key={index}
          className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
        >
          {item.icon}
        </a>
      ))}

      <div className="sidebar-divider" />

      <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

