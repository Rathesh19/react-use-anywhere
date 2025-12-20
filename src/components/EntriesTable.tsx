import React, { useState } from 'react';
import { 
  DataGrid, 
  GridColDef, 
  GridRowsProp, 
  GridToolbar 
} from '@mui/x-data-grid';
import { 
  Box, 
  Typography, 
  Paper 
} from '@mui/material';

// Mock data for entries
const initialRows: GridRowsProp = [
  { 
    id: 1, 
    project: 'Dashboard Redesign', 
    status: 'In Progress', 
    priority: 'High', 
    assignee: 'John Doe', 
    dueDate: '2023-12-15' 
  },
  { 
    id: 2, 
    project: 'Mobile App Update', 
    status: 'Completed', 
    priority: 'Medium', 
    assignee: 'Jane Smith', 
    dueDate: '2023-11-30' 
  },
  { 
    id: 3, 
    project: 'Backend Optimization', 
    status: 'Pending', 
    priority: 'Low', 
    assignee: 'Mike Johnson', 
    dueDate: '2024-01-20' 
  },
  { 
    id: 4, 
    project: 'Security Audit', 
    status: 'In Progress', 
    priority: 'Critical', 
    assignee: 'Sarah Williams', 
    dueDate: '2023-12-10' 
  },
  { 
    id: 5, 
    project: 'API Documentation', 
    status: 'Completed', 
    priority: 'Low', 
    assignee: 'Alex Brown', 
    dueDate: '2023-11-25' 
  }
];

const EntriesTable: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>(initialRows);

  // Column definitions with custom styling and formatting
  const columns: GridColDef[] = [
    { 
      field: 'project', 
      headerName: 'Project', 
      width: 200,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 120,
      headerClassName: 'super-app-theme--header',
      cellClassName: (params) => {
        if (!params.value) return '';
        return params.value === 'Completed' ? 'status-completed' : 
               params.value === 'In Progress' ? 'status-in-progress' : 
               params.value === 'Pending' ? 'status-pending' : '';
      }
    },
    { 
      field: 'priority', 
      headerName: 'Priority', 
      width: 100,
      headerClassName: 'super-app-theme--header',
      cellClassName: (params) => {
        if (!params.value) return '';
        return params.value === 'High' ? 'priority-high' : 
               params.value === 'Critical' ? 'priority-critical' : 
               params.value === 'Medium' ? 'priority-medium' : 
               params.value === 'Low' ? 'priority-low' : '';
      }
    },
    { 
      field: 'assignee', 
      headerName: 'Assignee', 
      width: 150,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    { 
      field: 'dueDate', 
      headerName: 'Due Date', 
      width: 120,
      headerClassName: 'super-app-theme--header',
    }
  ];

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: 500, 
        width: '100%', 
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          fontWeight: 'bold',
        },
        '& .status-completed': {
          color: 'green',
          fontWeight: 'bold',
        },
        '& .status-in-progress': {
          color: 'orange',
          fontWeight: 'bold',
        },
        '& .status-pending': {
          color: 'gray',
          fontWeight: 'bold',
        },
        '& .priority-high': {
          color: 'red',
          fontWeight: 'bold',
        },
        '& .priority-critical': {
          color: 'darkred',
          fontWeight: 'bold',
        },
        '& .priority-medium': {
          color: 'orange',
          fontWeight: 'bold',
        },
        '& .priority-low': {
          color: 'green',
          fontWeight: 'bold',
        }
      }}
    >
      <Box sx={{ height: '100%', width: '100%' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            p: 2, 
            fontWeight: 'bold', 
            backgroundColor: 'rgba(0, 0, 0, 0.03)' 
          }}
        >
          Project Entries
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          sx={{ border: 'none' }}
          initialState={{
            pagination: { 
              paginationModel: { pageSize: 5 } 
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default EntriesTable;
