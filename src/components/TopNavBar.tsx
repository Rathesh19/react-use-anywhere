import React, { useState } from 'react';
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
  Box 
} from '@mui/material';
import { Search, Add, AccountCircle } from '@mui/icons-material';

interface TopNavBarProps {
  logoSrc?: string;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ logoSrc }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        {logoSrc ? (
          <img src={logoSrc} alt="Logo" style={{ height: 40, marginRight: 16 }} />
        ) : (
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, marginRight: 2 }}>
            Dashboard
          </Typography>
        )}

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Analytics</Button>
        </Box>

        {/* Search Field */}
        <Box sx={{ flexGrow: 1, position: 'relative', borderRadius: 1, marginRight: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            fullWidth
            InputProps={{
              startAdornment: <Search />,
              sx: { 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' }
              }
            }}
          />
        </Box>

        {/* New Project Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          startIcon={<Add />}
          sx={{ marginRight: 2 }}
        >
          New Project
        </Button>

        {/* Avatar Dropdown */}
        <IconButton onClick={handleMenuOpen}>
          <Avatar>
            <AccountCircle />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
