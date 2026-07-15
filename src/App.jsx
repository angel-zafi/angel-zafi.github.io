import "./App.css";

function App() {
  const projects = [
    {
      id: 1,
      title: "BookEasy Digital Library",
      description:
        "A full-stack digital library where users can browse, reserve and manage books.",
      technologies: ["React", "Node.js", "MongoDB"],
      websiteUrl: "https://your-live-project-link.com",
      githubUrl: "https://github.com/angel-zafi/your-repository",
    },
    {
      id: 2,
      title: "Branch Sales Dashboard",
      description:
        "An interactive Power BI dashboard for comparing branch performance and sales.",
      technologies: ["Power BI", "Excel", "Data Analysis"],
      websiteUrl: "",
      githubUrl: "https://github.com/angel-zafi/your-dashboard-repository",
    },
  ];

  return (
    <main>
      <section className="landing-section">
        <h1 className="portfolio-title">Angel’s Portfolio</h1>

        <div className="landing-content">
          <div className="profile-frame">
            <span>Profile picture</span>
          </div>

          <nav className="landing-menu" aria-label="Portfolio sections">
            <a href="#about" className="menu-button">
              About Me
            </a>

            <a href="#projects" className="menu-button">
              Projects
            </a>

            <a href="#contact" className="menu-button">
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-container">
          <p className="section-label">Get to know me</p>

          <h2>About Me</h2>

          <p className="about-text">
            Hello! I’m Angel, an IT and FinTech student interested in web
            development, data analytics and building useful digital solutions.
          </p>

          <p className="about-text">
            I enjoy creating projects that combine technical skills with
            practical and user-friendly designs.
          </p>
        </div>
      </section>

      <section id="projects" className="content-section projects-section">
        <div className="section-container">
          <p className="section-label">Things I have created</p>

          <h2>My Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <div className="project-image">
                  <span>Project screenshot</span>
                </div>

                <div className="project-information">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="content-section">
        <div className="section-container contact-container">
          <p className="section-label">Say hello</p>

          <h2>Contact Me</h2>

          <p>
            You can contact me by email or view more of my work through GitHub.
          </p>

          <div className="contact-links">
            <a href="mailto:your-email@example.com">Email Me</a>

            <a
              href="https://github.com/angel-zafi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;