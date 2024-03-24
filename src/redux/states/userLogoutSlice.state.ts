import { Result } from "@/models/redux";
import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../asyncState";

const UserLogoutState: Result = {
    isSuccess: false,
    message: ''
}

const userLogoutSlice = createSlice({
    name: 'userLogout',
    initialState: {
        userData: UserLogoutState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logoutUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userData = action.payload;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = 'error';
            })
    }
});

export default userLogoutSlice.reducer;