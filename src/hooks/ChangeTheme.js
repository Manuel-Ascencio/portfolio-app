import { useState, useEffect } from "react";

export const ChangeTheme = () => {
  const localTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    if (theme === "default") {
      window.localStorage.setItem("theme", "lightTheme");
      setTheme("lightTheme");
      return;
    }

    window.localStorage.setItem("theme", "default");
    setTheme("default");
  };

  return [theme, toggleTheme];
};
