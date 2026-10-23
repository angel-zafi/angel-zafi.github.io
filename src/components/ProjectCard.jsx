function ProjectCard({ project }) {
  const hasGithub = Boolean(project.github);

  const openGithub = () => {
    if (hasGithub) {
      window.open(
        project.github,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <article
      className={`project-card ${
        hasGithub ? "project-card-clickable" : ""
      }`}
      onClick={openGithub}
      onKeyDown={(event) => {
        if (
          hasGithub &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          openGithub();
        }
      }}
      role={hasGithub ? "link" : undefined}
      tabIndex={hasGithub ? 0 : undefined}
    >
      {/* -----------------------------------------
          Project Header
      ----------------------------------------- */}

      <div className="project-header">
        <h3>{project.title}</h3>

        {hasGithub && (
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        )}
      </div>

      {/* -----------------------------------------
          Description
      ----------------------------------------- */}

      <p className="project-description">
        {project.description}
      </p>

      {/* -----------------------------------------
          Topics Covered
      ----------------------------------------- */}

      <div className="project-tags">
        {project.topics.map((topic) => (
          <span key={topic}>
            {topic}
          </span>
        ))}
      </div>

      {/* -----------------------------------------
          Documentation
      ----------------------------------------- */}

      {project.documentation && (
        <a
          className="project-documentation"
          href={project.documentation}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
        >
          View Documentation ↗
        </a>
      )}
    </article>
  );
}

export default ProjectCard;