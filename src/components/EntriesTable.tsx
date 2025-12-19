import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Checkbox,
  Button,
  Box
} from '@mui/material';

interface Entry {
  id: number;
  project: string;
  status: string;
  progress: number;
  deadline: string;
}

const EntriesTable: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const mockEntries: Entry[] = [
    { id: 1, project: 'Dashboard Redesign', status: 'In Progress', progress: 65, deadline: '2023-08-15' },
    { id: 2, project: 'Mobile App', status: 'Completed', progress: 100, deadline: '2023-07-01' },
    { id: 3, project: 'E-commerce Platform', status: 'Pending', progress: 30, deadline: '2023-09-30' },
    { id: 4, project: 'CRM System', status: 'In Progress', progress: 75, deadline: '2023-08-25' },
    { id: 5, project: 'Marketing Website', status: 'Completed', progress: 100, deadline: '2023-06-15' }
  ];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = mockEntries.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  return (
    <Paper sx={{ width: '100%', mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          disabled={selected.length === 0}
        >
          Bulk Actions
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < mockEntries.length}
                  checked={mockEntries.length > 0 && selected.length === mockEntries.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEntries.map((entry) => {
              const isItemSelected = isSelected(entry.id);

              return (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={entry.id}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      onClick={() => handleClick(entry.id)}
                    />
                  </TableCell>
                  <TableCell>{entry.project}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>{entry.progress}%</TableCell>
                  <TableCell>{entry.deadline}</TableCell>
                  <TableCell>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="secondary">Edit</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EntriesTable;
