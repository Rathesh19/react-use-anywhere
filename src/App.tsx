import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { CircularProgress } from '@mui/material';

const Dashboard = lazy(() => import('./pages/Dashboard'));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <Dashboard />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
