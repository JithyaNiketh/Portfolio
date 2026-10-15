
import "./ProjectCard.css";

function ProjectCard({ title, category, description, tech, link }) {
  return (
    <a href={link} className="project-link">
      <article className="project-card">
        <div className="project-card-top">
          <span className="project-card-label">PROJECT</span>
          <a href={link} aria-label={`View ${title}`}>
            ↗
          </a>
        </div>
        <h3>{title}</h3>
        <p className="project-category">{category}</p>
        <p>{description}</p>

        <div className="project-tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </a>
  );
}

export default ProjectCard;
