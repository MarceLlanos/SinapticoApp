import { auth, firestore } from '@/firebase';
import { DataAuth } from '@/models';
import {
	User,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';

export const getCurrentUser = (): User | null => {
	return auth.currentUser;
};

export const registerUserEmailPassword = async (dataRegister: DataAuth) => {
	const { email, password } = dataRegister;
	const user = await createUserWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(_err => {
			const error = _err.code;
			const errorMessage = _err.message;
			return { error, errorMessage };
		});
	return user;
};

export const loginUserEmailPassword = async (dataLogin: DataAuth) => {
	const { email, password } = dataLogin;
	const user = await signInWithEmailAndPassword(auth, email, password)
		.then(({ user }) => user)
		.catch(_err => {
			const error = _err.code;
			const errorMessage = _err.message;
			return { error, errorMessage };
		});
	return user;
};

export const logoutUser = async () => {
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
