import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  TextField, 
  Avatar, 
  Menu, 
  MenuItem, 
  IconButton, 
  Box 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
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
            InputProps={{ disableUnderline: true }}
          />
        </Box>

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ mr: 2 }}
        >
          New Project
        </Button>

        {/* Avatar Dropdown */}
        <IconButton onClick={handleAvatarClick}>
          <Avatar>
            <AccountCircleIcon />
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
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
