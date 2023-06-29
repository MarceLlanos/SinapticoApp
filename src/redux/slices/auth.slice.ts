import { AuthState, FirebaseUser } from '@/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialUserState: AuthState = {
	isLoading: false,
	user: null as any,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth/user',
	initialState: initialUserState,
	reducers: {
		registerUser: (state, { payload }: PayloadAction<FirebaseUser>) => {
			state.isLoading = true;
			state.user = payload;
		},
		loginUser: (state, { payload }: PayloadAction<FirebaseUser>) => {
			state.isLoading = true;
			state.user = payload;
		},
		reset: () => initialUserState,
	},
});

export const { registerUser, loginUser, reset } = authSlice.actions;
