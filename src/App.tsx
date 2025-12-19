import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import TopNavBar from './components/TopNavBar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TopNavBar />
        {/* Other dashboard components will be added here */}
      </div>
    </ThemeProvider>
  );
};

export default App;
