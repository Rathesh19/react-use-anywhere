import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import theme from './theme'; // We'll create this in the next step

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
