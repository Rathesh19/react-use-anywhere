import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EntriesTable from '../EntriesTable';

const theme = createTheme();

describe('EntriesTable Component', () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <EntriesTable />
      </ThemeProvider>
    );
  };

  test('renders table with columns', () => {
    renderComponent();
    expect(screen.getByText(/project name/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/progress/i)).toBeInTheDocument();
  });

  test('table has pagination', () => {
    renderComponent();
    const paginationButtons = screen.getAllByRole('button', { name: /page/i });
    expect(paginationButtons.length).toBeGreaterThan(0);
  });

  test('table supports row selection', () => {
    renderComponent();
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  test('sorting works on column headers', () => {
    renderComponent();
    const columnHeaders = screen.getAllByRole('columnheader');
    columnHeaders.forEach(header => {
      fireEvent.click(header);
      // Verify sorting indicator or state change
    });
  });

  test('component is responsive', () => {
    const { container } = renderComponent();
    const tableContainer = container.firstChild;
    expect(tableContainer).toHaveStyle('width: 100%');
  });
});
