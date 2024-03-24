import { createSlice } from "@reduxjs/toolkit";
import { createUser, login, loginWithGoogle, logoutUser } from "../asyncState";
import { UserResult } from "@/models/redux";

const userState: UserResult = {
    isSuccess: false,
    message: '',
    user: {
        uid: '',
        email: '',
        userName: '',
        password: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: userState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.userData = payload;
            })
            .addCase(createUser.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userData = action.payload;
            })
            .addCase(loginWithGoogle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userData = action.payload
            })
    }
});

export default userSlice.reducer;

