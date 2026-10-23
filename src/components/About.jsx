function About() {
  
  const technologies = [
    {
      category: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
      ],
    },
    {
      category: "Cloud & IoT",
      skills: [
        "AWS",
        "M5Stack Core2",
        "MQTT",
      ],
    },
    {
      category: "Data Analytics & Automation",
      skills: [
        "Python",
        "Power BI",
        "KNIME",
        "Streamlit",
        "Excel VBA",
        "Power Automate",
      ],
    },
    {
      category: "AI & Creative Tools",
      skills: [
        "Synthesia AI",
      ],
    },
    {
      category: "DevOps & Testing",
      skills: [
        "Git",
        "GitHub",
        "Jenkins",
        "Docker",
        "Jest",
        "Playwright",
      ],
    },
  ];


  return (
    <section
      id="about"
      className="content-section about-section"
    >
      <div className="section-container about-container">
        {/* -----------------------------------------
            About Heading
        -----------------------------------------  */}

        <p className="section-label">
          Get to know me
        </p>

        <h2 className="about-title">
          About Me
        </h2>

        {/* -----------------------------------------
            Introduction
        -----------------------------------------  */}

        <div className="about-item">
          <h3 className="about-item-title">
            Introduction
          </h3>

          <div className="about-item-content">
            <p>
              Hello! I’m Angel, an Information Technology
              student who enjoys building practical and
              user-friendly digital solutions.
            </p>

            <p>
              I have experience developing web, mobile,
              cloud and data-driven applications through
              my school projects.
            </p>

            <p>
              I enjoy learning new technologies and turning
              ideas into applications that solve real-world
              problems.
            </p>
          </div>
        </div>

        {/* -----------------------------------------
            Experience
        -----------------------------------------  */}

        <div className="about-item">
          <h3 className="about-item-title">
            Experience
          </h3>

          <div className="about-item-content">
            <p>
              My project experience includes developing a
              Flutter mobile application with Firebase,
              an AWS-hosted restaurant seating website,
              a Lost &amp; Found website using an Agile
              SCRUM workflow, and an online library built
              with React and MongoDB.
            </p>

            <p>
              I have also worked on an IoT plant moisture
              detector using the M5Stack Core2 and AWS
              Sandbox, as well as a Streamlit application
              for analysing chocolate sales trends.
            </p>
          </div>
        </div>

        {/* -----------------------------------------
            Education
        -----------------------------------------  */}

        <div className="about-item">
          <h3 className="about-item-title">
            Education
          </h3>

          <div className="about-item-content">
            <p className="about-emphasis">
              Diploma in Information Technology
            </p>

            <p>
              Temasek Polytechnic
            </p>
          </div>
        </div>

        {/* -----------------------------------------
            Technical Knowledge
        -----------------------------------------  */}

        <div className="about-item about-item-last">
          <h3 className="about-item-title">
            Technical Knowledge
          </h3>

          <div className="tech-groups">
            {technologies.map((group) => (
              <div
                className="tech-group"
                key={group.category}
              >
                <h4 className="tech-category">
                  {group.category}
                </h4>

                <div className="tech-list">
                  {group.skills.map((technology) => (
                    <span
                      className="tech-item"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;