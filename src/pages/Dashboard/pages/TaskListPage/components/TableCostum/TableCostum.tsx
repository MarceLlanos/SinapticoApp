
import React, { ChangeEvent, useState } from 'react';
import './style/index.css';

import {
    Paper,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    Table
} from '@mui/material';

interface ITableProps {

}
interface Column {
  id: 'numeral' | 'dificultad' | 'tiempoAprox' | 'descripcion' | 'estado' | 'encargados' | 'fase';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: 'numeral',
    label: '#', minWidth: 8,
    format: (value: number) => value.toFixed(0)
  },
  { id: 'dificultad', label: 'Dificultad', minWidth: 50 },
  {
    id: 'tiempoAprox',
    label: 'Tiempo aprox.',
    minWidth: 100
  },
  {
    id: 'descripcion',
    label: 'Descripción',
    minWidth: 190,
  },
  {
    id: 'estado',
    label: 'Estado',
    minWidth: 50,
  },
  {
    id: 'encargados',
    label: 'Encargados',
    minWidth: 70,
    format: (value: number) => value.toFixed(0)
  },
  {
    id: 'fase',
    label: 'Fase',
    minWidth: 20,
  },
];

interface Data {
  numeral: number;
  dificultad: JSX.Element;
  tiempoAprox: string;
  descripcion: string;
  estado: string;
  encargados: number;
  fase: string;
}

function createData(
  numeral: number,
  dificultad: JSX.Element,
  tiempoAprox: string,
  descripcion: string,
  estado: string,
  encargados: number,
  fase: string,
): Data {
  return { numeral, dificultad, tiempoAprox, descripcion, estado, encargados,fase };
}

const rows = [
  createData(1, <div className={`color red`}></div>, '03 Horas', 'Realizar la introduccion del proyecto, haciendo…', 'Pendiente', 2, 'fase 1'),
  createData(2, <div className={`color yellow`}></div>, '30 minutos', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
  createData(3, <div className={`color green`}></div>, '03 Horas', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
  createData(4, <div className={`color black`}></div>, '03 Horas', 'Realizar la introduccion del proyecto, haciendo…', 'Pendiente', 2, 'fase 1'),
  createData(5, <div className={`color red`}></div>, '30 minutos', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
  createData(6, <div className={`color green`}></div>, '03 Horas', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
  createData(7, <div className={`color black`}></div>, '03 Horas', 'Realizar la introduccion del proyecto, haciendo…', 'Pendiente', 2, 'fase 1'),
  createData(8, <div className={`color yellow`}></div>, '30 minutos', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
  createData(9, <div className={`color red`}></div>, '03 Horas', 'Realizar la caratula del proyecto, En documento…', 'Pendiente', 2, 'fase 1'),
];

const TableCostum: React.FC<ITableProps> = (props) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 340 }} className='greyDarkText'>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.numeral}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                </TableCell>
                                            );
                                            })}
                                        </TableRow>
                                    );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              
            />
        </Paper>
    );
}

export default TableCostum;
