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
  IconButton 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

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
        <Typography variant="h6" sx={{ flexGrow: 0.1 }}>
          Dashboard
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Analytics</Button>

        {/* Search Field */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          sx={{ 
            backgroundColor: 'white', 
            borderRadius: 1, 
            marginX: 2,
            flexGrow: 1 
          }}
          InputProps={{
            startAdornment: <SearchIcon />
          }}
        />

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          startIcon={<AddIcon />}
          sx={{ marginRight: 2 }}
        >
          New Project
        </Button>

        {/* Avatar Dropdown */}
        <IconButton onClick={handleAvatarClick}>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
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
