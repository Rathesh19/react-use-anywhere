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
    status: 'Pending', 
    priority: 'Medium', 
    assignee: 'Jane Smith', 
    dueDate: '2024-01-20' 
  },
  { 
    id: 3, 
    project: 'Backend Optimization', 
    status: 'Completed', 
    priority: 'Low', 
    assignee: 'Mike Johnson', 
    dueDate: '2023-11-30' 
  },
  { 
    id: 4, 
    project: 'Security Audit', 
    status: 'In Progress', 
    priority: 'Critical', 
    assignee: 'Sarah Williams', 
    dueDate: '2024-02-10' 
  },
  { 
    id: 5, 
    project: 'UX Research', 
    status: 'Planned', 
    priority: 'Low', 
    assignee: 'Emily Brown', 
    dueDate: '2024-03-05' 
  }
];

const EntriesTable: React.FC = () => {
  const [rows, setRows] = useState(initialRows);

  // Column definitions with type safety
  const columns: GridColDef[] = [
    { 
      field: 'project', 
      headerName: 'Project', 
      width: 200,
      editable: false 
    },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 150,
      renderCell: (params) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case 'Completed': return 'green';
            case 'In Progress': return 'orange';
            case 'Pending': return 'blue';
            case 'Planned': return 'gray';
            case 'Critical': return 'red';
            default: return 'black';
          }
        };

        return (
          <Box 
            sx={{ 
              color: getStatusColor(params.value), 
              fontWeight: 'bold' 
            }}
          >
            {params.value}
          </Box>
        );
      }
    },
    { 
      field: 'priority', 
      headerName: 'Priority', 
      width: 120,
      renderCell: (params) => {
        const getPriorityColor = (priority: string) => {
          switch (priority) {
            case 'High': return 'red';
            case 'Medium': return 'orange';
            case 'Low': return 'green';
            case 'Critical': return 'darkred';
            default: return 'black';
          }
        };

        return (
          <Box 
            sx={{ 
              color: getPriorityColor(params.value), 
              fontWeight: 'bold' 
            }}
          >
            {params.value}
          </Box>
        );
      }
    },
    { 
      field: 'assignee', 
      headerName: 'Assignee', 
      width: 180 
    },
    { 
      field: 'dueDate', 
      headerName: 'Due Date', 
      width: 150,
      type: 'date',
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
    }
  ];

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: 500, 
        width: '100%', 
        marginTop: 2 
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          padding: 2, 
          paddingBottom: 0 
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
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          '& .MuiDataGrid-toolbarContainer': {
            backgroundColor: '#f5f5f5',
            padding: 1
          }
        }}
      />
    </Paper>
  );
};

export default EntriesTable;
