export interface UserInterface {
    uid: string;
    name: string | null;
    photo: string | null;
    email: string | null;
    accessToken: string;
    emailVerified?: boolean;
    isLoggedIn: boolean;
}