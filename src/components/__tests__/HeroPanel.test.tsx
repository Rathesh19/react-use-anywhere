import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroPanel from '../HeroPanel';

const theme = createTheme();

describe('HeroPanel Component', () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <HeroPanel />
      </ThemeProvider>
    );
  };

  test('renders summary statistics', () => {
    renderComponent();
    expect(screen.getByText(/total projects/i)).toBeInTheDocument();
    expect(screen.getByText(/completed tasks/i)).toBeInTheDocument();
  });

  test('renders achievement metrics', () => {
    renderComponent();
    expect(screen.getByText(/achievement/i)).toBeInTheDocument();
  });

  test('renders data visualizations', () => {
    renderComponent();
    const chartElements = screen.getAllByTestId(/chart/i);
    expect(chartElements.length).toBeGreaterThan(0);
  });

  test('component is responsive', () => {
    const { container } = renderComponent();
    const heroPanel = container.firstChild;
    expect(heroPanel).toHaveStyle('width: 100%');
  });
});
