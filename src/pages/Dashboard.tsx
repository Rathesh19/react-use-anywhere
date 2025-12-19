import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  ThemeProvider, 
  CssBaseline 
} from '@mui/material';

// Import components
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

// Import theme
import { lightTheme, darkTheme } from '../theme';

// Mock data (replace with actual data source later)
const mockSummaryData = [
  { title: 'Total Projects', value: 24, icon: 'folder' },
  { title: 'Active Users', value: 156, icon: 'people' },
  { title: 'Revenue', value: '$45,230', icon: 'attach_money' },
];

const mockTableData = [
  { id: 1, project: 'Dashboard Redesign', status: 'In Progress', deadline: '2023-08-15' },
  { id: 2, project: 'Mobile App', status: 'Completed', deadline: '2023-07-30' },
  { id: 3, project: 'API Integration', status: 'Pending', deadline: '2023-09-01' },
];

const Dashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <TopNavBar 
        isDarkMode={isDarkMode} 
        onThemeToggle={toggleTheme} 
      />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HeroPanel />
          </Grid>
          
          <Grid item xs={12}>
            <SummaryCards cards={mockSummaryData} />
          </Grid>
          
          <Grid item xs={12}>
            <EntriesTable rows={mockTableData} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
