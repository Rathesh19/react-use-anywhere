import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline 
} from '@mui/material';

// Import Dashboard page
import Dashboard from './pages/Dashboard';

// Create a default theme (we'll customize this later)
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2', // Adjust as needed
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
