function ThemeToggle({
    theme,
    toggleTheme,
}) {
    return (
        <button
        className = "theme-toggle"
        onClick = {toggleTheme}
        type = "button"
        aria-label = {`Switch to ${
            theme === "light"
            ? "dark"
            : "light"
        } mode`}
        >
        {theme === "light"
            ? "🌙"
            : "☀️"}
        </button>
    );
}

export default ThemeToggle;