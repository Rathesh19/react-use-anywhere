import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';
import ProjectsIcon from '@mui/icons-material/Work';
import RevenueIcon from '@mui/icons-material/AttachMoney';
import UsersIcon from '@mui/icons-material/People';
import TasksIcon from '@mui/icons-material/CheckCircle';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, value, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="subtitle1" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="h5">{value}</Typography>
        </Box>
        <Box color={color}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const SummaryCards: React.FC = () => {
  const summaryData = [
    {
      icon: <ProjectsIcon />,
      title: 'Total Projects',
      value: '24',
      color: 'primary.main'
    },
    {
      icon: <RevenueIcon />,
      title: 'Total Revenue',
      value: '$45,230',
      color: 'success.main'
    },
    {
      icon: <UsersIcon />,
      title: 'Active Users',
      value: '128',
      color: 'info.main'
    },
    {
      icon: <TasksIcon />,
      title: 'Completed Tasks',
      value: '356',
      color: 'warning.main'
    }
  ];

  return (
    <Grid container spacing={3} sx={{ padding: 2 }}>
      {summaryData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SummaryCard 
            icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
