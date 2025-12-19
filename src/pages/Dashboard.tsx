import React from 'react';
import { Container, Box, Grid } from '@mui/material';

// Import previously created components
import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Navigation Bar */}
      <TopNavBar />
      
      {/* Main Dashboard Container */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Hero Panel */}
        <Box sx={{ mb: 4 }}>
          <HeroPanel />
        </Box>
        
        {/* Summary Cards */}
        <Box sx={{ mb: 4 }}>
          <SummaryCards />
        </Box>
        
        {/* Entries Table */}
        <Box>
          <EntriesTable />
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
