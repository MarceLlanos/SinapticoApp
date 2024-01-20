import { Paper } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import './style/index.css';
interface ITableProps<T> {
  columns: GridColDef[];
  rows: T[];
  pageSize: number;
}

const TableCostum = < T,  >({ columns, rows, pageSize }: ITableProps<T> ) => {

    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <DataGrid
          rows={ rows }
          columns={ columns }
          disableColumnSelector
          disableRowSelectionOnClick
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: pageSize
              }
            }
          }}
          pageSizeOptions={[pageSize]}
          getRowId={(row: any) => row.id  }
        />
      </Paper>
    );
}

export default TableCostum;
