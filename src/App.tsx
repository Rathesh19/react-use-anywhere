import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import theme, { darkTheme } from './theme';
import Dashboard from './pages/Dashboard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <CssBaseline />
      <Router>
        <Dashboard 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
