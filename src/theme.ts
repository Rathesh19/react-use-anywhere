import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define custom color palette
const primaryColor = {
  main: '#1976d2',      // Deep blue
  light: '#42a5f5',     // Lighter blue
  dark: '#1565c0',      // Darker blue
  contrastText: '#ffffff'
};

const secondaryColor = {
  main: '#9c27b0',      // Purple
  light: '#ba68c8',     // Light purple
  dark: '#7b1fa2',      // Dark purple
  contrastText: '#ffffff'
};

// Create theme with custom configurations
const theme = createTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    background: {
      default: '#f4f6f9',  // Light grey background
      paper: '#ffffff'      // White paper background
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5
    },
    button: {
      textTransform: 'none' // Prevents uppercase transformation
    }
  },
  shape: {
    borderRadius: 8 // Global border radius for consistent rounded corners
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

// Make typography responsive
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
