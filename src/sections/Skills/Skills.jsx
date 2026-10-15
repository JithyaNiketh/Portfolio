
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Skills.css";


const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React JS",
      "Redux Toolkit",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    title: "Programming Languages & Libraries",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "C#",
      "Playwright",
      "Git",
      "Figma",
      "Framer",
    ],
  },
  {
    title: "Game Dev",
    skills: [
      "Unity",
      "GameMaker Studio 2",
      "Unreal Engine",
      "C#",
    ],
  },
];


function Skills() {
  return (
    <section id="skills" className="page-section">
      <SectionTitle
        number="04 / SKILLS"
        title="What I work with."
        description="Technologies and tools I use to build things."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
