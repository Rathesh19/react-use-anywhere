import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SummaryCards from '../SummaryCards';

const theme = createTheme();

describe('SummaryCards Component', () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <SummaryCards />
      </ThemeProvider>
    );
  };

  test('renders multiple summary cards', () => {
    renderComponent();
    const cards = screen.getAllByTestId('summary-card');
    expect(cards.length).toBeGreaterThan(1);
  });

  test('cards have icons', () => {
    renderComponent();
    const cardIcons = screen.getAllByTestId('card-icon');
    expect(cardIcons.length).toBeGreaterThan(0);
  });

  test('cards display metrics', () => {
    renderComponent();
    expect(screen.getByText(/revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/users/i)).toBeInTheDocument();
  });

  test('component is responsive', () => {
    const { container } = renderComponent();
    const cardContainer = container.firstChild;
    expect(cardContainer).toHaveStyle('display: flex');
    expect(cardContainer).toHaveStyle('flex-wrap: wrap');
  });
});
