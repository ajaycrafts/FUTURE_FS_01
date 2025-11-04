import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-text">
        <h4 className="fade-in">Code. Design. Impact.</h4>
        <h1 className="slide-up">
          I'm <span>Revu Umamaheswara Sreerama Ajay</span>
        </h1>
        <h2 className="highlight">A Computer Science Student</h2>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn">Download Resume</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
        

        <div className="social-icons">
          <a href="https://github.com/ajaycrafts" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/revu-uma-maheswara-sreerama-ajay-06b2b2363/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
