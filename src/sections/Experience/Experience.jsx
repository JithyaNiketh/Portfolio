
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Experience.css";

const experience = [
  {
    role: "Trainee Developer",
    company: "InnoWave India",
    period: "Jan 2026 - July 2026",
    description:
      "Worked on cross-platform applications using React and React Native, Implemented state   \n" +
      "management using Redux and Redux Toolkit, and integrated third-party services into applications. \n"
  },
];

function Experience() {
  return (
    <section id="experience" className="page-section">
      <SectionTitle
        number="02 / EXPERIENCE"
        title="Where I've worked."
        description="My professional experience so far."
      />

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={item.company}>
            <div className="experience-meta">
              <span>{item.period}</span>
              <span>{item.company}</span>
            </div>

            <div className="experience-details">
              <h3>{item.role}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
