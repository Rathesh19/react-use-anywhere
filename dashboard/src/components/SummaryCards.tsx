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
import UsersIcon from '@mui/icons-material/People';

const SummaryCards: React.FC = () => {
  const summaryData = [
    {
      title: 'Total Projects',
      value: '21',
      icon: <ProjectIcon color="primary" />,
      color: 'primary.light'
    },
    {
      title: 'Total Revenue',
      value: '$45,000',
      icon: <RevenueIcon color="secondary" />,
      color: 'secondary.light'
    },
    {
      title: 'Active Users',
      value: '150',
      icon: <UsersIcon color="success" />,
      color: 'success.light'
    }
  ];

  return (
    <Grid container spacing={3}>
      {summaryData.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card>
            <CardContent>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}>
                <Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="h5" color="primary">
                    {item.value}
                  </Typography>
                </Box>
                {item.icon}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
