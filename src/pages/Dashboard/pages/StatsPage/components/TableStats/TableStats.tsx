
import React from 'react';
import './style/index.css';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	styled,
	tableCellClasses
} from '@mui/material';

interface ITableStatsProps {
	
}

function createData(
	user: string,
	pendientes: number,
	bloqueadas: number,
	enCurso: number,
	terminadas: number,
) {
	return { user, pendientes, bloqueadas, enCurso, terminadas };
}

const rows = [
	createData('Carlos Quiroga', 5, 6, 2, 1),
	createData('Maria Sossa', 2, 9, 3, 3),
	createData('Eduardo Martinez ', 2, 1, 2, 2),
	createData('Jorge Claros', 3, 3, 6, 3),
	createData('Carla Parada', 3, 1, 4, 3),
];
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
	}));
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const TableStats: React.FC<ITableStatsProps> = () => {
	const tableHeadTitle = ['Usuario', 'Pendientes', 'Bloqueadas', 'En curso', 'Terminadas'];

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						{
							tableHeadTitle.map((title, index) => (
								<TableCell align="center" key={index} sx={{fontSize: '0.711rem'}}>{ title }</TableCell>
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
							<StyledTableCell align="center">{row.pendientes}</StyledTableCell>
							<StyledTableCell align="center">{row.bloqueadas}</StyledTableCell>
							<StyledTableCell align="center">{row.enCurso}</StyledTableCell>
							<StyledTableCell align="center">{row.terminadas}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TableStats;
