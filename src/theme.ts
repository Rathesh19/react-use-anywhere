import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define primary and secondary colors
const PRIMARY_COLOR = '#1976d2';  // Material Blue
const SECONDARY_COLOR = '#dc004e';  // Material Pink

// Create theme with custom palette and typography
const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: '#ff4081',
      dark: '#9a0036',
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
      },
    },
  },
  spacing: 8,  // Base spacing unit
});

// Make typography responsive
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;

// Dark mode theme (optional)
export const darkTheme = createTheme({
  ...responsiveTheme,
  palette: {
    ...responsiveTheme.palette,
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});
