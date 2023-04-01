import { SerializedError } from "@reduxjs/toolkit";

export interface AuthState {
	uid: string;
	name?: string | null;
	email?: string | null;
	photo?: string | null;
	accessToken: string;
	isEmailConfirmed?: boolean;
}

export interface DataAuth {
	email: string;
	password: string;
	error?: SerializedError
}
