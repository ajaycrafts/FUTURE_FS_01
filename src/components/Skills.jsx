import { useEffect, useRef, useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', percent: 90, color: '#2196f3', icon: 'fab fa-python' },
    { name: 'Java', percent: 75, color: '#00bcd4', icon: 'fab fa-java' },
    { name: 'HTML', percent: 90, color: '#ff9800', icon: 'fab fa-html5' },
    { name: 'JavaScript', percent: 70, color: '#f7df1e', icon: 'fab fa-js' },
    { name: 'React', percent: 70, color: '#61dafb', icon: 'fab fa-react' },
    { name: 'MySQL', percent: 75, color: '#00758f', icon: 'fas fa-database' },
    { name: 'Git', percent: 60, color: '#f1502f', icon: 'fab fa-git-alt' },
  ];

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">My proficiency levels in various technologies.</p>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <i className={skill.icon}></i>
              <span className="skill-label">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: animate ? `${skill.percent}%` : '0%',
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

