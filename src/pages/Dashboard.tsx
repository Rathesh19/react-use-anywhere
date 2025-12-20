import React from 'react';
import { 
  Container, 
  Box, 
  IconButton, 
  useTheme 
} from '@mui/material';
import { 
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon 
} from '@mui/icons-material';

import TopNavBar from '../components/TopNavBar';
import HeroPanel from '../components/HeroPanel';
import SummaryCards from '../components/SummaryCards';
import EntriesTable from '../components/EntriesTable';

interface DashboardProps {
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  themeMode, 
  toggleThemeMode 
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.background.default, 
      minHeight: '100vh',
      color: theme.palette.text.primary 
    }}>
      <TopNavBar 
        themeToggle={
          <IconButton 
            onClick={toggleThemeMode} 
            color="inherit"
            aria-label="toggle theme"
          >
            {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        } 
      />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <HeroPanel />
        <SummaryCards />
        <EntriesTable />
      </Container>
    </Box>
  );
};

export default Dashboard;
