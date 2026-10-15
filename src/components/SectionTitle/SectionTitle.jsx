
import "./SectionTitle.css";

function SectionTitle({ number, title, description }) {
  return (
    <div className="section-title">
      <span className="section-number">{number}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;
