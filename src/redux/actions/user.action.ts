import { User } from "@/models/redux";
import { CREATE_ACCOUNT } from "@/schemas";
import { useMutation } from "@apollo/client";
import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState: User = {
    uid: '',
    userName: '',
    email: '',
    password: '',
    photoUrl: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        createUser: (state, action) => {

        },

    }
});