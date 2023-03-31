export interface FirebaseUser {
    uid: string;
    email: string;
    accessToken: string;
    emailVerified?: boolean;
}