import React from 'react';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Paper 
} from '@mui/material';

// Import previously created components
import Navigation from '../components/Navigation';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

// Mock data (you'll replace this with real data later)
const mockSummaryData = [
  { title: 'Total Projects', value: 24, icon: 'folder', color: 'primary' },
  { title: 'Active Users', value: 156, icon: 'people', color: 'secondary' },
  { title: 'Revenue', value: '$45,230', icon: 'attach_money', color: 'success' },
  { title: 'Pending Tasks', value: 12, icon: 'pending', color: 'warning' }
];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: (theme) => theme.palette.background.default,
      minHeight: '100vh'
    }}>
      {/* Navigation Component */}
      <Navigation />

      {/* Main Dashboard Container */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Hero Panel */}
          <Grid item xs={12}>
            <HeroPanel />
          </Grid>

          {/* Summary Cards */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {mockSummaryData.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <SummaryCards 
                    title={card.title}
                    value={card.value}
                    icon={card.icon}
                    color={card.color}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Entries Table */}
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2, 
                display: 'flex', 
                flexDirection: 'column' 
              }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>
                Recent Entries
              </Typography>
              <EntriesTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
