/** App context for theme and search */
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// Get initial theme
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('dark-theme');
  if (storedDarkMode !== null) {
    return storedDarkMode === 'true';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState('cat');

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('dark-theme', newDarkTheme);
  };

  // Apply theme
  useEffect(() => {
    document.querySelector('body').classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Context hook
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
