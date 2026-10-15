
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./About.css";

function About() {
  return (
    <section id="about" className="page-section about-section" data-reveal> 
      <SectionTitle
        number="01 / ABOUT"
        title="A little about me."
        data-reveal
      />

      <div className="about-grid" data-reveal>
        <article className="about-block">
          <span className="about-label">PROFESSIONALLY</span>

          <h3>What I do.</h3>

          <p>
            I'm a web developer focused on building intuitive,
            responsive web applications. I enjoy turning ideas
            into functional products, with an emphasis on clean
            code, thoughtful design, and user experience.
          </p>
        </article>

        <article className="about-block">
          <span className="about-label">PERSONALLY</span>

          <h3>Beyond the screen.</h3>

          <p>
            Outside of work, I'm drawn to video games,
            motorcycles, music, and the occasional tv show binge. 
            And I'm always learning something new, whether it's work related or just for fun. <br/>
            “A jack of all trades is a master of none, but oftentimes better than a master of one.”
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
