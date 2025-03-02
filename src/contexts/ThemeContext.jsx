import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Initialize theme from local storage when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      
      // If no preference in localStorage, check user's system preference
      if (localStorage.getItem('darkMode') === null) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
        localStorage.setItem('darkMode', prefersDarkMode.toString());
      } else {
        setDarkMode(savedDarkMode);
      }
      
      // Apply theme
      if (savedDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newMode.toString());
        
        if (newMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
      
      return newMode;
    });
  };
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
