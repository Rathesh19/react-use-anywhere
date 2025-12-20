import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Box, 
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material';

// Define interface for summary card props
interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

// Individual Summary Card Component
const SummaryCard: React.FC<SummaryCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  color 
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      <CardContent 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          height: '100%',
          padding: theme.spacing(2)
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: theme.spacing(1)
          }}
        >
          <Typography 
            variant={isSmallScreen ? 'subtitle2' : 'subtitle1'} 
            color="textSecondary"
          >
            {title}
          </Typography>
          <Box 
            sx={{ 
              color: color, 
              display: 'flex', 
              alignItems: 'center' 
            }}
          >
            {icon}
          </Box>
        </Box>
        
        <Box>
          <Typography 
            variant={isSmallScreen ? 'h6' : 'h5'} 
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            {value}
          </Typography>
          <Typography 
            variant="body2" 
            color={change >= 0 ? 'success.main' : 'error.main'}
          >
            {change >= 0 ? '+' : ''}{change}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Summary Cards Component
const SummaryCards: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Mock data - replace with actual data source
  const summaryData = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      change: 15.5,
      icon: <AttachMoneyIcon />,
      color: theme.palette.success.main
    },
    {
      title: 'New Customers',
      value: '1,250',
      change: 12.3,
      icon: <PeopleIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Sales Volume',
      value: '4,750',
      change: 8.7,
      icon: <ShoppingCartIcon />,
      color: theme.palette.secondary.main
    },
    {
      title: 'Growth Rate',
      value: '25.5%',
      change: 22.1,
      icon: <TrendingUpIcon />,
      color: theme.palette.warning.main
    }
  ];

  return (
    <Grid 
      container 
      spacing={isSmallScreen ? 2 : 3}
      sx={{ marginTop: theme.spacing(2) }}
    >
      {summaryData.map((card, index) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          key={index}
          sx={{ height: '100%' }}
        >
          <SummaryCard 
            title={card.title}
            value={card.value}
            change={card.change}
            icon={card.icon}
            color={card.color}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
