import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

describe('Navigation Component', () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  test('renders logo', () => {
    renderComponent();
    const logoElement = screen.getByAltText(/company logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderComponent();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/analytics/i)).toBeInTheDocument();
  });

  test('renders search field', () => {
    renderComponent();
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders new project button', () => {
    renderComponent();
    const newProjectButton = screen.getByText(/new project/i);
    expect(newProjectButton).toBeInTheDocument();
  });

  test('renders user avatar', () => {
    renderComponent();
    const avatar = screen.getByTestId('user-avatar');
    expect(avatar).toBeInTheDocument();
  });
});
