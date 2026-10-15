
import "./Sidebar.css";

const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "SKILLS", id: "skills" },
  { label: "CONTACT", id: "contact" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="#home" className="sidebar-logo">
        JA.
      </a>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">

        <a
          className="resume-link"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View Resume ↗
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
