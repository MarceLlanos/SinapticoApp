import moment from 'moment';
import 'moment/locale/es-mx';

export function formatDate(inputDate: Date | { seconds: number, nanoseconds: number }): string {
	let timestamp;

	if (inputDate instanceof Date) {
		timestamp = inputDate.getTime() / 1000;
	} else {
		timestamp = inputDate.seconds;
	}

	const formattedDate = moment.unix(timestamp).format('LL');
	return formattedDate;
}