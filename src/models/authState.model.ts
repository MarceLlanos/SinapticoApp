import { FirebaseUser } from './FirebaseUser.model';

export interface AuthUserCredential {
	email: string;
	password: string;
	accessToken?: string;
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
