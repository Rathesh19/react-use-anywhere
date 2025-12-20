import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from './theme';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Create theme based on current mode
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // Toggle theme mode
  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Dashboard 
          themeMode={mode} 
          toggleThemeMode={toggleThemeMode} 
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
