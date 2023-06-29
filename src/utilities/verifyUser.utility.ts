import { FirebaseUser } from '@/models';

export const verifyUser = (dataUserAuth: FirebaseUser): Boolean => {
	if (dataUserAuth === null) {
		return false;
	}
	const { email, accessToken, uid } = dataUserAuth;

	return email || accessToken || uid ? true : false;
};
