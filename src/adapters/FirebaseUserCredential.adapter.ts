import { FirebaseUser } from '@/models';
import { UserCredential } from 'firebase/auth';

export const createUserCredentialAdapted = async (
	userResult: UserCredential
) => {
	const { user } = userResult;
	try {
		const formattedUserCredential: FirebaseUser = {
			email: user.email || '',
			uid: user.uid,
			name: user.displayName ?? '',
			photo: user.photoURL ?? '',
			accessToken: (await user.getIdToken()) ?? '',
			emailVerified: user.emailVerified,
		};

		return formattedUserCredential;
	} catch (error) {}
};
