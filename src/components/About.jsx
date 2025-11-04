import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="My Profile" className="about-profile" />


        <div className="about-text" data-aos="fade-up">
          <p>
            I'm a <strong>Computer Science student</strong>, with a strong interest in AI, blockchain, and full-stack web development. I enjoy building responsive, user-friendly web apps and learning how things work behind the scenes.
          </p>
          <p>
            This portfolio highlights my projects, certifications, and hands-on experience. I'm always looking to grow, improve, and create meaningful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
