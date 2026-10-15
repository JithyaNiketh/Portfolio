
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "IRA Consultancy",
    category: "Freelance Project",
    description:
      "Designed and developed a website for a real estate and insurance firm. Developed with React JS and Tailwind CSS. ",
    tech: ["React JS", "Tailwind CSS", "JavaScript", "Lovable AI", "Figma" ],
    link: "#",
  },
  {
    title: "TaskFlow",
    category: "Personal Project",
    description:
      "A basic Kanban-style task management application. A fancier to-do list app, one might say. ",
    tech: ["React JS", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Web Automation Agent",
    category: "Personal Project",
    description:
      "A multi-user tool that turns natural language instructions into browser actions. Uses Playwright for browser automation and LLMs for understanding instructions. Stores usernames and passwords securely in a local json file for future automation tasks.",
    tech: ["Python", "Playwright", "LLMs"],
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="page-section">
      <SectionTitle
        number="03 / PROJECTS"
        title="Things I've built."
        description="A selection of projects I've worked on."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
