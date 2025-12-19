import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Box 
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const mockData = [
  { name: 'Jan', projects: 4, revenue: 2400 },
  { name: 'Feb', projects: 3, revenue: 1398 },
  { name: 'Mar', projects: 2, revenue: 9800 },
  { name: 'Apr', projects: 5, revenue: 3908 },
  { name: 'May', projects: 4, revenue: 4800 },
  { name: 'Jun', projects: 3, revenue: 3800 },
];

const HeroPanel: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Summary</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Typography variant="body1">Total Projects</Typography>
              <Typography variant="body1" color="primary">21</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
              <Typography variant="body1">Revenue</Typography>
              <Typography variant="body1" color="secondary">$45,000</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Project Revenue</Typography>
            <LineChart width={600} height={300} data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="projects" stroke="#8884d8" />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default HeroPanel;
