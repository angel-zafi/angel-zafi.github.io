import { useState, useEffect } from "react";
import "./App.css";

import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light"
        ? "dark"
        : "light"
    );
  };

  return (
    <>
      <Landing
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <About />

      <Projects />
    </>
  );
}

export default App;