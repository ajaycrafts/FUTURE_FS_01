import './Projects.css';
import staySync from '../assets/stay-sync.png'; // Replace with your actual screenshot

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-card">
        <img src={staySync} alt="Stay Sync Dashboard" />
        <div className="project-info">
          <h3>Stay Sync</h3>
          <p>
            Developed a full-stack web application, Stay Sync, to streamline hostel and PG search for students.
            Implemented admin dashboard, listing management, and responsive UI using React, Node.js, and MongoDB.
          </p>
          <a href="https://github.com/your-repo-link" target="_blank" className="project-btn">View Code</a>
        </div>
      </div>
    </section>
  );
}
