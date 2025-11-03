import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [accentColor, setAccentColor] = useState('blue');

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedAccent = localStorage.getItem('accentColor');

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    if (savedAccent) {
      setAccentColor(savedAccent);
    }
  }, []);

  // Save theme preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      
      // Apply theme to document
      if (newValue) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newValue;
    });
  };

  const changeAccentColor = (color) => {
    setAccentColor(color);
    localStorage.setItem('accentColor', color);
  };

  const theme = {
    isDarkMode,
    accentColor,
    colors: {
      // Dark Theme
      dark: {
        bg: '#0f1419',
        bgSecondary: '#1a1f2e',
        bgTertiary: '#2d3748',
        text: '#e8eef7',
        textSecondary: '#a0aec0',
        textMuted: '#718096',
      },
      // Light Theme (optional)
      light: {
        bg: '#ffffff',
        bgSecondary: '#f8f9fa',
        bgTertiary: '#e9ecef',
        text: '#1a1f2e',
        textSecondary: '#495057',
        textMuted: '#6c757d',
      },
      // Accents
      accents: {
        blue: '#4f9ff0',
        orange: '#ff8c42',
        purple: '#8b5cf6',
        green: '#10b981',
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, accentColor, changeAccentColor, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Utility hook to get specific theme colors
export const useThemeColors = () => {
  const { isDarkMode, theme } = useTheme();
  return isDarkMode ? theme.colors.dark : theme.colors.light;
};
