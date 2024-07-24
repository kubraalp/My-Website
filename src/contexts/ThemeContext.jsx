
import React, { createContext, useState, useEffect, useContext } from 'react';

// Tema Context'i
const ThemeContext = createContext();

// ThemeProvider bileşeni
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark' ? true : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook'u
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };