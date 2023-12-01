import {
    LoginInput,
    UserInput
} from "@/models/redux";
import {
    createAccountEmailPassword,
    loginEmailPassword,
    loginUserWithGoogle,
    logout
} from "@/services";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk('user/createUser',
    async ({ email, password, userName }: UserInput) => {
        try {
            const { isSuccess, message, user } = await createAccountEmailPassword({ email, password, userName });
            return {
                isSuccess,
                message,
                user
            };
        } catch (error) {
            throw error
        }
    }
);

export const login = createAsyncThunk('user/login', async ({ email, password }: LoginInput) => {
    try {
        const { isSuccess, message, user } = await loginEmailPassword({ email, password });
        return {
            isSuccess,
            message,
            user
        }
    } catch (error) {
        throw error;
    }
});

export const loginWithGoogle = createAsyncThunk('user/loginWithGoogle', async () => {
    try {
        const { isSuccess, message, user } = await loginUserWithGoogle();
        return {
            isSuccess,
            message,
            user
        }
    } catch (error) {
        throw error;
    }
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
    const { isSuccess, message } = await logout();
    return { isSuccess, message };
})

