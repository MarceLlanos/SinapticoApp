
import React from 'react';
import './style/index.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { StyledTableCell, StyledTableRow } from '../TableStats/TableStats';

interface ITableDailyReportProps {

}

function createData(
	user: string,
	report: number,
	participation: number
) {
	return { user, report, participation };
}

const rows = [
	createData('Carlos Quiroga', 5, 6),
	createData('Maria Sossa', 2, 9),
	createData('Eduardo Martinez ', 2, 1),
	createData('Jorge Claros', 3, 3),
	createData('Carla Parada', 3, 1),
];

const TableDailyReport: React.FC<ITableDailyReportProps> = (props) => {
    const tableHeadTitle = ['Usuario', 'Días con reporte', '% de participación'];
    return (
        <TableContainer component={Paper}>
			<Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						{
							tableHeadTitle.map((title, index) => (
								<TableCell align="center" key={index}>{ title }</TableCell>
							))
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow
							key={row.user}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<StyledTableCell component="th" scope="row">
							{row.user}
							</StyledTableCell>
							<StyledTableCell align="center">{row.report}</StyledTableCell>
							<StyledTableCell align="center">{row.participation}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
    );
}

export default TableDailyReport;
