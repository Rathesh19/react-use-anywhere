import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from '../Dashboard';

const theme = createTheme();

describe('Dashboard Page', () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  test('renders navigation component', () => {
    renderComponent();
    expect(screen.getByTestId('top-navigation')).toBeInTheDocument();
  });

  test('renders hero panel', () => {
    renderComponent();
    expect(screen.getByTestId('hero-panel')).toBeInTheDocument();
  });

  test('renders summary cards', () => {
    renderComponent();
    expect(screen.getByTestId('summary-cards')).toBeInTheDocument();
  });

  test('renders entries table', () => {
    renderComponent();
    expect(screen.getByTestId('entries-table')).toBeInTheDocument();
  });

  test('page layout is responsive', () => {
    const { container } = renderComponent();
    const dashboardContainer = container.firstChild;
    expect(dashboardContainer).toHaveStyle('display: flex');
    expect(dashboardContainer).toHaveStyle('flex-direction: column');
  });
});
