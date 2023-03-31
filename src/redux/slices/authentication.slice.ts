import { createUserAdapted } from "@/adapters/FirebaseUser.adapter";
import { DataRegister, loginUserEmailPassword, registerUserEmailPassword } from "@/services";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./messages.slice";
import { UserInterface } from "@/models/user.model";

const user: UserInterface = {
    uid: '',
    email: '',
    name: '',
    photo: '',
    accessToken: '',
    emailVerified: false,
    isLoggedIn: false
}

const initialUserState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: {} }

const getErrorMessage = (error: any, thunk: any) => {
    const errorMessage = thunk.dispatch(setMessage(error.message));

    return thunk.rejectWithValue(errorMessage);
}


export const registerEmailAndPassword = createAsyncThunk(
    'auth/register',
    async ({ email, password }: DataRegister, thunkAPI) => {
        try {
            const user: any = await registerUserEmailPassword({ email, password });
            const response = await createUserAdapted(user);

            return response;
        } catch (error: any) {
            return getErrorMessage(error, thunkAPI);
        }
    }
);

export const loginEmailAndPassword = createAsyncThunk(
    'auth/login',
    async ({ email, password }: DataRegister, thunkAPI) => {
        try {
            const data = await loginUserEmailPassword({ email, password });
            return data;
        } catch (error) {
            return getErrorMessage(error, thunkAPI);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {

    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerEmailAndPassword.fulfilled, (state, action: PayloadAction<UserInterface>) => {
                state.isLoggedIn = false;
                state.user = action.payload;
            })
            .addCase(registerEmailAndPassword.rejected, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(loginEmailAndPassword.fulfilled, (state, action: PayloadAction<UserInterface>) => {
                state.isLoggedIn = false;
                state.user = action.payload;
            })
            .addCase(loginEmailAndPassword.rejected, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = initialUserState;
            })
    }
});

export default authSlice.reducer;