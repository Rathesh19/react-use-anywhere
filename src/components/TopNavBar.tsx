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
  Box, 
  Container 
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Add as AddIcon, 
  AccountCircle as AccountCircleIcon 
} from '@mui/icons-material';

const TopNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Dashboard
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" sx={{ mx: 1 }}>Home</Button>
            <Button color="inherit" sx={{ mx: 1 }}>Projects</Button>
            <Button color="inherit" sx={{ mx: 1 }}>Analytics</Button>
          </Box>

          {/* Search Field */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ 
                flexGrow: 1, 
                maxWidth: 300, 
                mr: 2,
                '& .MuiOutlinedInput-root': { 
                  borderRadius: 4 
                }
              }}
              InputProps={{
                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />
              }}
            />
          </Box>

          {/* New Project Button */}
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
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
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
