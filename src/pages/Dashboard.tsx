import React from 'react';
import { 
  Container, 
  Box, 
  ThemeProvider, 
  CssBaseline 
} from '@mui/material';
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
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
        <Container maxWidth="xl" sx={{ flexGrow: 1, paddingTop: 3 }}>
          <HeroPanel />
          <SummaryCards />
          <EntriesTable />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
