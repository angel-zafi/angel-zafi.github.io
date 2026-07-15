function ProjectCard({ project }) {
    return (
        <article className = "project-card">
        <div className = "project-image">
            <span> Project screenshot </span>
        </div>

        <div className = "project-information">
            <h3> {project.title} </h3>

            <p> {project.description}</p>

            <div className = "project-tags">
            {project.technologies.map((technology) => (
                <span key = {technology}> {technology} </span>
            ))}
            </div>

            <div className = "project-links">
            <a
                href = {project.githubUrl}
                target = "_blank"
                rel = "noopener noreferrer"
            >
                View Code
            </a>
            </div>
        </div>
        </article>
    );
}

export default ProjectCard;