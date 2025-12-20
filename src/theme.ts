import { createTheme, PaletteMode } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

// Function to create theme with dynamic mode support
export const createAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: blue[700],
        ...(mode === 'dark' && {
          main: blue[300],
        }),
      },
      background: {
        ...(mode === 'light'
          ? {
              default: '#f4f4f4',
              paper: '#ffffff',
            }
          : {
              default: '#121212',
              paper: '#1e1e1e',
            }),
      },
      text: {
        ...(mode === 'light'
          ? {
              primary: grey[900],
              secondary: grey[700],
            }
          : {
              primary: '#ffffff',
              secondary: grey[400],
            }),
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
  });
};

// Default export for light mode
export const lightTheme = createAppTheme('light');
export const darkTheme = createAppTheme('dark');
