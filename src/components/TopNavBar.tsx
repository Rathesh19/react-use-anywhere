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

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
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
              display: 'flex', 
              fontWeight: 700, 
              color: 'inherit', 
              textDecoration: 'none' 
            }}
          >
            Dashboard
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
            <Button color="inherit" component={Link} to="/reports">Reports</Button>
          </Box>

          {/* Search Field */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', mr: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />,
              }}
              sx={{ minWidth: 200 }}
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
          <Box>
            <IconButton onClick={handleAvatarClick}>
              <Avatar>
                <AccountCircleIcon />
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleAvatarClose}
            >
              <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
              <MenuItem onClick={handleAvatarClose}>Settings</MenuItem>
              <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
