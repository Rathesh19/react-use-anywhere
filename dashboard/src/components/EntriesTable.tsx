import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TablePagination 
} from '@mui/material';

interface Project {
  id: number;
  name: string;
  status: string;
  revenue: number;
  startDate: string;
}

const mockProjects: Project[] = [
  { id: 1, name: 'Web App', status: 'Active', revenue: 5000, startDate: '2023-01-15' },
  { id: 2, name: 'Mobile App', status: 'In Progress', revenue: 3500, startDate: '2023-02-20' },
  { id: 3, name: 'E-commerce Site', status: 'Completed', revenue: 7500, startDate: '2022-11-10' },
  { id: 4, name: 'CRM System', status: 'Active', revenue: 6200, startDate: '2023-03-05' },
  { id: 5, name: 'Marketing Platform', status: 'In Progress', revenue: 4800, startDate: '2023-04-12' },
];

const EntriesTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Start Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockProjects
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.id}</TableCell>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.status}</TableCell>
                  <TableCell>${project.revenue}</TableCell>
                  <TableCell>{project.startDate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mockProjects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default EntriesTable;
