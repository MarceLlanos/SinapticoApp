export interface FirebaseUser {
	uid: string;
	email: string;
	name?: string;
	photo?: string;
	accessToken: string;
	emailVerified?: boolean;
}
