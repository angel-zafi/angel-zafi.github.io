import profileImage from "../assets/images/aus.jpg";
import ThemeToggle from "./ThemeToggle";

import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import gmailIcon from "../assets/icons/gmail.svg";

function Landing({
    theme,
    toggleTheme,
}) {
    return (
        <section className = "landing-section" id = "home">

        <ThemeToggle
            theme = {theme}
            toggleTheme = {toggleTheme}
        />

        <h1 className = "portfolio-title">
            Angel's Portfolio
        </h1>

        <div className = "landing-content">
            <div className = "profile-frame">
            <img
                src = {profileImage}
                alt = "Portrait of Angel"
                className = "profile-image"
            />
            </div>

            <nav
            className = "landing-menu"
            aria-label = "Portfolio sections"
            >
            <a
                href = "#about"
                className = "menu-button menu-button-one"
            >
                About Me
            </a>

            <a
                href = "#projects"
                className = "menu-button menu-button-two"
            >
                Projects
            </a>

            <div className="social-links">

            <a
                href="https://github.com/angel-zafi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <img
                src={githubIcon}
                alt=""
                />
            </a>

            <a
                href="https://www.linkedin.com/in/angelzafi53165498"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <img
                src={linkedinIcon}
                alt=""
                />
            </a>

            <a
                href="mailto:iamzafiangel5334@gmail.com"
                aria-label="Email"
            >
                <img
                src={gmailIcon}
                alt=""
                />
            </a>

            </div>
            </nav>
        </div>

        <a href = "#about" className = "scroll-indicator">
            Scroll down
            <span aria-hidden = "true">↓</span>
        </a>
        </section>
    );
}

export default Landing;