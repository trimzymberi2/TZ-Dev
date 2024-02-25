import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem("selectedTheme");
    if (theme) {
      setSelectedTheme(theme);
      document.querySelector("body").setAttribute('data-theme', theme);
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem("selectedTheme", "dark");
    setSelectedTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem("selectedTheme", "light");
    setSelectedTheme("light");
  };

  const toggletTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, setDarkMode, setLightMode, toggletTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
