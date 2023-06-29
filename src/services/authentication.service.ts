import { createUserCredentialAdapted } from '@/adapters';
import { auth, firestore, googleProvider } from '@/firebase';
import { AuthUserCredential } from '@/models';
import {
	User,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const getCurrentUser = (): User | null => {
	return auth.currentUser;
};

export const registerEmailPassword = async ({
	email,
	password,
}: AuthUserCredential): Promise<User> => {
	const user = await createUserWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(error => error);

	return user;
};

export const loginEmailPassword = async ({
	email,
	password,
}: AuthUserCredential): Promise<User> => {
	const user = await signInWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(_err => _err);
	return user;
};

export const loginWithGoogle = async () => {
	const userData = await signInWithPopup(auth, googleProvider)
		.then(userResult => userResult)
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			return { errorCode, errorMessage, email };
		});

	return userData;
};

export const logout = async () => {
	const currentUserUid = getCurrentUser()?.uid;
	const logout = await signOut(auth);

	return currentUserUid !== '' && logout;
};

export const getDbUser = async (uid: string) => {
	const dbUserCollection = collection(firestore, 'user');
	const userDoc = doc(dbUserCollection, uid);
	const user = await getDoc(userDoc);
	return user;
};
