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
import { Link } from 'react-router-dom';

const TopNavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
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
            component={Link} 
            to="/" 
            sx={{ 
              mr: 2, 
              display: { xs: 'none', md: 'flex' }, 
              fontWeight: 700, 
              color: 'inherit', 
              textDecoration: 'none' 
            }}
          >
            Dashboard
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button 
              component={Link} 
              to="/projects" 
              sx={{ my: 2, color: 'inherit', display: 'block' }}
            >
              Projects
            </Button>
            <Button 
              component={Link} 
              to="/analytics" 
              sx={{ my: 2, color: 'inherit', display: 'block' }}
            >
              Analytics
            </Button>
          </Box>

          {/* Search Field */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon />,
                sx: { 
                  borderRadius: 2, 
                  backgroundColor: 'background.paper',
                  width: { xs: '100%', md: 300 }
                }
              }}
            />
          </Box>

          {/* New Project Button */}
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            sx={{ mx: 2 }}
          >
            New Project
          </Button>

          {/* Avatar Dropdown */}
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircleIcon />
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
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
