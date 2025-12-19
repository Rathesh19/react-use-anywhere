import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Switch, 
  FormControlLabel 
} from '@mui/material';

import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

interface DashboardProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  isDarkMode, 
  toggleTheme 
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopNavBar />
      
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Theme Toggle */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  color="primary"
                />
              }
              label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
            />
          </Grid>

          {/* Hero Panel */}
          <Grid item xs={12}>
            <HeroPanel />
          </Grid>

          {/* Summary Cards */}
          <Grid item xs={12}>
            <SummaryCards />
          </Grid>

          {/* Entries Table */}
          <Grid item xs={12}>
            <EntriesTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
