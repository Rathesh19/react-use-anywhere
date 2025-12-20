import React from 'react';
import { Container, Grid } from '@mui/material';
import Navigation from '../components/Navigation';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="xl" style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {/* Placeholder for future components */}
          <Grid item xs={12}>
            Dashboard Content Coming Soon
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
