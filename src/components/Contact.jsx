import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/xrbojrrl"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        {/* ✅ Hidden field to track source */}
        <input
          type="hidden"
          name="source"
          value="Portfolio Contact Page"
        />

        {/* ✅ Redirect after submission */}
        <input
          type="hidden"
          name="_redirect"
          value="https://yourportfolio.com/thank-you"
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
