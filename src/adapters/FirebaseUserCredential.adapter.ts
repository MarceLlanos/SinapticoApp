import { FirebaseUser } from '@/models';
import { UserCredential } from 'firebase/auth';

export const adaptUserCredential = async (userResult: UserCredential) => {

	const { user } = userResult;
	try {
		const formattedUserCredential: FirebaseUser = {
			email: user.email || '',
			uid: user.uid,
			name: user.displayName ?? '',
			photo: user.photoURL ?? '',
		};

		return formattedUserCredential;
	} catch (error) { }
};
