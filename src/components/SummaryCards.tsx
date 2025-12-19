import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box 
} from '@mui/material';
import ProjectIcon from '@mui/icons-material/Work';
import RevenueIcon from '@mui/icons-material/AttachMoney';
import TaskIcon from '@mui/icons-material/CheckCircle';
import UserIcon from '@mui/icons-material/People';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, value, color }) => (
  <Card>
    <CardContent>
      <Box display="flex" alignItems="center">
        <Box 
          sx={{ 
            backgroundColor: color, 
            color: 'white', 
            borderRadius: '50%', 
            padding: 1, 
            marginRight: 2 
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="subtitle2" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="h6">{value}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const SummaryCards: React.FC = () => {
  const cardData = [
    {
      icon: <ProjectIcon />,
      title: 'Total Projects',
      value: '24',
      color: '#3f51b5'
    },
    {
      icon: <RevenueIcon />,
      title: 'Total Revenue',
      value: '$45,230',
      color: '#4caf50'
    },
    {
      icon: <TaskIcon />,
      title: 'Completed Tasks',
      value: '156',
      color: '#ff9800'
    },
    {
      icon: <UserIcon />,
      title: 'Team Members',
      value: '12',
      color: '#9c27b0'
    }
  ];

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {cardData.map((card, index) => (
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
