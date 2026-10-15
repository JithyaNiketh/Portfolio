import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="page-section hero-section" data-reveal>
      <div className="hero-title" data-reveal>
        <span className="hero-eyebrow">
          FRONTEND DEVELOPER
        </span>

        <h1>
          JITHYA
          <br />
          ATLURI<span className="hero-accent">.</span>
        </h1>

        <div className="hero-actions">
          <a
            href="https://github.com/JithyaNiketh"
            target="_blank"
            rel="noreferrer"
            className="primary-link"
          >
            Github ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jithyaatluri"
            target="_blank"
            rel="noreferrer"
            className="primary-link"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:jithyaniketh@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="primary-link"
          >
            Email ↗
          </a>
        </div>
      </div>

      <div className="hero-secondary">
        <div className="hero-description">
          <h3 className="hero-description-title">About me. </h3>
          <p>
            Web developer based in Hyderabad, India, focused on building intuitive web experiences. 
            From branding to real-time applications.
          </p>
          <p>
             I keep things minimal and prioritize user experience over aesthetics.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
