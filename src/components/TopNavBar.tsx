import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  TextField, 
  Avatar, 
  Menu, 
  MenuItem, 
  Box,
  Switch,
  FormControlLabel
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Brightness4 as DarkModeIcon, 
  Brightness7 as LightModeIcon 
} from '@mui/icons-material';

interface TopNavBarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ isDarkMode, onThemeToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
          Dashboard
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ flexGrow: 0.4, display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Analytics</Button>
        </Box>

        {/* Search Field */}
        <Box sx={{ flexGrow: 0.3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SearchIcon />
          <TextField 
            variant="standard" 
            placeholder="Search..." 
            fullWidth 
          />
        </Box>

        {/* Theme Toggle and New Project */}
        <Box sx={{ flexGrow: 0.1, display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isDarkMode}
                onChange={onThemeToggle}
                color="default"
              />
            }
            label={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          />
          <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
            New Project
          </Button>
        </Box>

        {/* Avatar Dropdown */}
        <IconButton onClick={handleAvatarClick}>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
