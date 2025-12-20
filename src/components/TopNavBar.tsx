import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Avatar, 
  Menu, 
  MenuItem, 
  TextField, 
  Box,
  useTheme
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Add as AddIcon, 
  AccountCircle 
} from '@mui/icons-material';

interface TopNavBarProps {
  themeToggle: React.ReactNode;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ themeToggle }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={1}
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary 
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 0, mr: 2 }}
        >
          Dashboard
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button color="inherit" sx={{ mr: 2 }}>Home</Button>
          <Button color="inherit" sx={{ mr: 2 }}>Projects</Button>
          <Button color="inherit">Analytics</Button>
        </Box>

        {/* Search Field */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{ 
              ml: 2, 
              flexGrow: 1,
              '& .MuiOutlinedInput-root': { borderRadius: 2 } 
            }}
            InputProps={{
              startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />
            }}
          />
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Theme Toggle */}
          {themeToggle}

          {/* New Project Button */}
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />} 
            sx={{ ml: 2, borderRadius: 2 }}
          >
            New Project
          </Button>

          {/* Avatar Dropdown */}
          <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
            <Avatar>
              <AccountCircle />
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
