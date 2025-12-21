import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import TopNavBar from './components/TopNavBar';
import HeroPanel from './components/HeroPanel';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar />
      <HeroPanel />
      {/* Additional components can be added here */}
    </ThemeProvider>
  );
};

export default App;
