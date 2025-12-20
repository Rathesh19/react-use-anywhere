import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
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
import { 
  TrendingUp as TrendingUpIcon, 
  CheckCircle as CheckCircleIcon 
} from '@mui/icons-material';

// Mock data for charts and stats
const performanceData = [
  { name: 'Jan', performance: 65 },
  { name: 'Feb', performance: 59 },
  { name: 'Mar', performance: 80 },
  { name: 'Apr', performance: 81 },
  { name: 'May', performance: 56 },
  { name: 'Jun', performance: 55 },
];

const achievementData = [
  { title: 'Projects Completed', value: 24, icon: <CheckCircleIcon color="success" /> },
  { title: 'Performance Score', value: '85%', icon: <TrendingUpIcon color="primary" /> },
];

const HeroPanel: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
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
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="performance" fill={theme.palette.primary.main} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievement Stats */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {achievementData.map((achievement, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between' 
                  }}>
                    <Box>
                      <Typography variant="subtitle1">
                        {achievement.title}
                      </Typography>
                      <Typography variant="h5" color="text.primary">
                        {achievement.value}
                      </Typography>
                    </Box>
                    {achievement.icon}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPanel;
