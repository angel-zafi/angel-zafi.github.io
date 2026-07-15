import ProjectCard from "./ProjectCard";

function Projects() {
    const projects = [
        {
        id: 1,
        title: "Book Guru",
        description:
            "A web application for managing books with automated testing and DevOps tools.",
        technologies: ["React", "Node.js", "Jest", "Jenkins"],
        githubUrl: "https://github.com/angel-zafi",
        },
    ];

    return (
        <section id = "projects" className = "content-section projects-section">
        <div className = "section-container">
            <p className = "section-label"> Things I have created </p>

            <h2> My Projects </h2>

            <div className = "projects-grid">
            {projects.map((project) => (
                <ProjectCard key = {project.id} project = {project} />
            ))}
            </div>
        </div>
        </section>
    );
}

export default Projects;