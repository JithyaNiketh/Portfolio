
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="page-section">
      <SectionTitle
        number="05 / CONTACT"
        title="Let's talk."
        description="Have a project or opportunity in mind? Get in touch."
      />

      <div className="contact-content">

        <a
          className="contact-email"
          href="mailto:jithyaniketh@gmail.com"
        >
          Email ↗
        </a>
      </div>

      <footer className="site-footer">
        <span>Made with love and lots of coffee. </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}

export default Contact;
