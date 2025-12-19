import React from 'react';
import { 
  Grid, 
  Typography, 
  Card, 
  CardContent 
} from '@mui/material';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HeroPanel: React.FC = () => {
  // Sample chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Project Progress',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Project Performance'
      }
    }
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Summary Section */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Projects</Typography>
            <Typography variant="h4">24</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Achievement Stats */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Completed Projects</Typography>
            <Typography variant="h4">18</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Data Visualization */}
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Bar data={chartData} options={chartOptions} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroPanel;
