import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Typography, 
  useTheme 
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

// Mock data for achievements and chart
const achievementsData = [
  { label: 'Projects Completed', value: 24 },
  { label: 'Tasks Finished', value: 156 },
  { label: 'Hours Worked', value: 480 }
];

const chartData = [
  { month: 'Jan', productivity: 65 },
  { month: 'Feb', productivity: 59 },
  { month: 'Mar', productivity: 80 },
  { month: 'Apr', productivity: 81 },
  { month: 'May', productivity: 56 },
  { month: 'Jun', productivity: 55 }
];

const HeroPanel: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Summary Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              {achievementsData.map((item) => (
                <Box 
                  key={item.label} 
                  display="flex" 
                  justifyContent="space-between" 
                  my={1}
                >
                  <Typography variant="body2">{item.label}</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Achievement Stats */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Productivity Trends
              </Typography>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar 
                    dataKey="productivity" 
                    fill={theme.palette.primary.main} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPanel;
