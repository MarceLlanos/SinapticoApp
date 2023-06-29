import moment from 'moment';

export const verifyDate = (dateSelected: Date, currentDate: Date): Boolean => {
	const currentDateFormatted = moment(currentDate).format('YYYY-MM-DD');
	const dateSelectedFormatted = moment(dateSelected).format('YYY-MM-DD');
	if (dateSelectedFormatted === currentDateFormatted) {
		return false;
	} else if (dateSelected < currentDate) {
		return false;
	} else {
		return true;
	}
};
