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

// Mock data for charts
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

const HeroPanel: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Summary Section */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Project Summary</Typography>
            <Typography variant="body2">
              Total Projects: 24
              Completed: 18
              Pending: 6
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Achievement Stats */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Achievement Stats</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={achievementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Performance Visualization */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Performance Trend</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="performance" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroPanel;
