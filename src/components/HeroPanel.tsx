import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for charts and stats
const achievementData = [
  { name: 'Projects', value: 24 },
  { name: 'Completed', value: 18 },
  { name: 'Pending', value: 6 }
];

const performanceData = [
  { month: 'Jan', performance: 65 },
  { month: 'Feb', performance: 59 },
  { month: 'Mar', performance: 80 },
  { month: 'Apr', performance: 81 },
  { month: 'May', performance: 56 },
  { month: 'Jun', performance: 55 }
];

interface HeroPanelProps {
  // Add any props if needed
}

const HeroPanel: React.FC<HeroPanelProps> = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {/* Achievement Stats */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Achievement Stats
            </Typography>
            <Box display="flex" justifyContent="space-around">
              {achievementData.map((stat) => (
                <Box key={stat.name} textAlign="center">
                  <Typography variant="h4" color="primary">
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle2">
                    {stat.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Performance Chart */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Performance
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="performance" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroPanel;
