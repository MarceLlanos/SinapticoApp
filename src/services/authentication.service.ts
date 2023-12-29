import { auth, firestore, googleProvider } from '@/firebase';
import { FirebaseUser } from '@/models';
import {
	User,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { addDocument } from './collection.service';
import {
	LoginInput,
	UserGoogle,
	UserInput, UserResult,
	Result,
} from '@/models/redux';
import { adaptUserCredential } from '@/adapters';

export const getCurrentUser = (): User | null => {
	return auth.currentUser;
};

const userRef = collection(firestore, 'users');

export const verifyIfEmailExist = async (email: string): Promise<boolean> => {
	try {
		const resultVerification = await fetchSignInMethodsForEmail(auth, email);
		if (resultVerification.length > 0) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}

};

export const verifyIfEmailExistOnUser = async (uid: string): Promise<boolean> => {
	try {
		const userQuery = query(userRef, where('uid', '==', uid));
		const userSnapshot = await getDocs(userQuery);

		const user = userSnapshot.docs.map(doc => (doc.data()));
		return user.length > 0;

	} catch (error) {
		console.error('Error verificando si el usuario existe:', error);
		throw error;
	}
};

export const createAccountEmailPassword = async ({ email, password, userName }: UserInput) => {
	try {
		const verify = await verifyIfEmailExist(email);
		if (verify === false) {
			const user = await createUserWithEmailAndPassword(auth, email, password)
				.then(({ user }) => user)
				.catch(error => error);

			await addDocument('users', {
				uid: user.uid,
				email,
				password,
				userName,
			});

			const result: UserResult = {
				isSuccess: true,
				message: 'Cuenta creada satisfactoriamente',
				user: {
					uid: user.uid,
					email,
					password,
					userName,
				}
			}
			return result;
		} else {
			const result: UserResult = {
				isSuccess: false,
				message: `El email ${email} ya está registrado, por favor ingrese otra cuenta!`,
				user: {
					uid: '',
					email: '',
					password: '',
					userName: ''
				}
			}
			return result;
		}
	} catch (error) {
		const result: UserResult = {
			isSuccess: false,
			message: `${error}`,
			user: {
				uid: '',
				email: '',
				password: '',
				userName: ''
			}
		}
		return result
	}

};

export const loginEmailPassword = async ({ email, password }: LoginInput): Promise<UserResult> => {
	try {
		const verify = await verifyIfEmailExist(email);
		if (verify) {
			const user = await signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => user)
				.catch((error) => { throw error });

			const userRegister = await getUser(user.uid);

			const result: UserResult = {
				isSuccess: true,
				message: `Bienvenido ${userRegister.userName}!`,
				user: {
					uid: userRegister.uid,
					email: userRegister.email!,
					userName: userRegister.userName!
				}
			};

			return result;
		} else {
			return {
				isSuccess: false,
				message: `El email: '${email}' no se encuentra registrado, por favor cree una cuenta nueva!`,
				user: {
					uid: '',
					email: '',
					userName: ''
				}
			};
		}
	} catch (error) {
		return {
			isSuccess: false,
			message: `Error al tratar de hacer login ${error}`,
			user: {
				uid: '',
				email: '',
				userName: ''
			}
		};
	}
};

export const loginUserWithGoogle = async (): Promise<UserResult> => {
	try {
		const userData = await signInWithPopup(auth, googleProvider)
			.then((userResult) => userResult)
			.catch(error => {
				throw error;
			});

		const result: FirebaseUser = (await adaptUserCredential(userData)) as FirebaseUser;
		const verifyUserExist = await verifyIfEmailExistOnUser(result.uid);
		const userGoogle: UserGoogle = {
			uid: result.uid,
			email: result.email,
			photoUrl: result?.photo!,
			userName: result.name!,
		}
		if (verifyUserExist === false) {
			await addDocument('users', userGoogle);
		}

		const userResult: UserResult = {
			isSuccess: true,
			message: 'Ingreso a la app satisfactoriamente',
			user: userGoogle
		}

		return userResult;
	} catch (error) {
		throw error;
	}
};
export const logout = async (): Promise<Result> => {
	try {
		const currentUser = getCurrentUser();
		const uid = currentUser?.uid;
		if (uid !== '') {
			await signOut(auth);
			return {
				isSuccess: true,
				message: 'Gracias por usar Sinaptico'
			}
		} else {
			return {
				isSuccess: false,
				message: 'La sesion se finalizó automaticamente'
			}
		}
	} catch (error) {
		throw error;
	}
};

export const getUser = async (uid: string): Promise<UserGoogle> => {
	try {
		const userQuery = query(userRef, where('uid', '==', uid));
		const userSnapshot = await getDocs(userQuery);
		const user = userSnapshot.docs[0].data();

		const userResult: UserGoogle = {
			uid: user.uid,
			userName: user.userName,
			email: user.email,
			photoUrl: user.photoUrl || '',
		};

		return userResult;
	} catch (error) {
		throw error;
	}
};
