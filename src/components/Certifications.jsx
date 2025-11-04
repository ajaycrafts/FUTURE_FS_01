import './Certifications.css';
import automationCert from '../assets/automation-anywhere.jpg'; // Make sure this image exists

export default function Certifications() {
  const certs = [
    {
      title: 'Essentials Developer Certification',
      issuer: 'Automation Anywhere',
      date: 'September 18, 2025',
      image: automationCert,
      pdf: '/FUTURE_FS_01/certificates/essential-automation-certificate.pdf',

    },
    // Add more certificates here if needed
  ];

  return (
    <section className="cert-section" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-list">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.image} alt={cert.title} />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
             <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn"
               >
                      View PDF
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

