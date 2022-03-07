import React, { useEffect, useState } from "react";

function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === "dark");
    const toggleDrakMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    useEffect(() => {
        const html = window.document.documentElement;
        const prev = isDarkMode ? "light" : "dark";
        html.classList.remove(prev);
        const next = isDarkMode ? "dark" : "light";
        html.classList.add(next);
        localStorage.setItem("theme", next);
    }, [isDarkMode]);
    return [isDarkMode, toggleDrakMode];
}
export default DarkMode;