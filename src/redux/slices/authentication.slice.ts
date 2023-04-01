import { AuthState, DataAuth } from '@/models';
import {
    loginUserEmailPassword,
    logoutUser,
    registerUserEmailPassword,
} from '@/services';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setMessage } from './messages.slice';


const userDataAuth: AuthState = {
    uid: '',
    email: '',
    name: '',
    photo: '',
    accessToken: ''
}


const getErrorMessage = (error: any, thunk: any) => {
    const errorMessage = thunk.dispatch(setMessage(error.message));

    return thunk.rejectWithValue(errorMessage);
};

export const registerEmailAndPassword = createAsyncThunk(
    'auth/register',
    async (dataAuth: DataAuth, thunkAPI) => {
        try {
            const user: any = await registerUserEmailPassword(dataAuth);

            return user;
        } catch (error: any) {
            return getErrorMessage(error, thunkAPI);
        }
    }
);

export const loginEmailAndPassword = createAsyncThunk(
    'auth/login',
    async (dataAuth: DataAuth, thunkAPI) => {
        try {
            const data = await loginUserEmailPassword(dataAuth);
            return data;
        } catch (error) {
            return getErrorMessage(error, thunkAPI);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await logoutUser();
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ error: error.message })
    }
});

const initialUserState = userDataAuth
    ? { authenticated: true, userDataAuth }
    : { authenticated: false, userDataAuth: null }

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialUserState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                registerEmailAndPassword.fulfilled,
                (state, action: PayloadAction<AuthState>) => {
                    state.authenticated = true;
                    state.userDataAuth = action.payload;
                }
            )
            .addCase(registerEmailAndPassword.rejected, state => {
                state.authenticated = false;
            })
            .addCase(
                loginEmailAndPassword.fulfilled,
                (state, action: PayloadAction<AuthState>) => {
                    state.authenticated = true;
                    state.userDataAuth = action.payload;
                }
            )
            .addCase(loginEmailAndPassword.rejected, state => {
                state.authenticated = false;
            })
            .addCase(logout.fulfilled, state => {
                state.authenticated = false;
                state.userDataAuth = null;
            });
    },
});