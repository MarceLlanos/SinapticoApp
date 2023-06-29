import { FirebaseUser } from '@/models';
import { User } from 'firebase/auth';

export const createUserAdapted = async (user: User) => {
	try {
		const formattedUser: FirebaseUser = {
			email: user.email ?? '',
			uid: user.uid,
			name: user.displayName ?? '',
			photo: user.photoURL ?? '',
			accessToken: (await user.getIdToken()) ?? '',
			emailVerified: user.emailVerified,
		};

		return formattedUser;
	} catch (error) {}
};
