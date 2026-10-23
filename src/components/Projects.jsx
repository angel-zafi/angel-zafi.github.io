import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="content-section projects-section"
    >
      <div className="section-container">
        <h2 className="projects-title">
          My Projects
        </h2>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;