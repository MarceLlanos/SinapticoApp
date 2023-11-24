import { FirebaseUser } from './FirebaseUser.model';

export interface AuthUserCredential {
	userName: string;
	email: string;
	password: string;
}

export type AuthState = {
	user: FirebaseUser;
	isLoading: Boolean;
	error: string | null;
};
export interface UserData {
	uid: string;
	email: string;
	name: string;
	photo: string;

}

export type NewUser = AuthUserCredential & UserData;
