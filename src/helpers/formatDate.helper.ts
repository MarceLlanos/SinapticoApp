import moment from 'moment';
import 'moment/locale/es-mx';

export function formatDate(inputDate: Date | { seconds?: number, nanoseconds?: number } | undefined | null): string {
	if (!inputDate) {
		return '';
	}

	let timestamp;

	if (inputDate instanceof Date) {
		timestamp = inputDate.getTime() / 1000;
	} else {
		timestamp = inputDate.seconds || 0;
	}

	const formattedDate = moment.unix(timestamp).format('LL');
	return formattedDate;
}