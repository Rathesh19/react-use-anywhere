import React from 'react';
import { 
  Container, 
  ThemeProvider, 
  CssBaseline, 
  Box 
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Import components
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

// Create a theme instance
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
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const Dashboard: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopNavBar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <HeroPanel />
          <SummaryCards />
          <EntriesTable />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
