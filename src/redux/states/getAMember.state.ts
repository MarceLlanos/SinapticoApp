import { createSlice } from "@reduxjs/toolkit";
import { getMemberTeam } from "../asyncState/team.async";
import { UserTeam } from "@/models";

const userInitialState: UserTeam = {
    uid: '',
    id_project: '',
    role: '',
    email: '',
    photoUrl: '',
    userName: ''
}

const getAMember = createSlice({
    name: 'getMember',
    initialState: {
        members: userInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMemberTeam.fulfilled, (state, action) => {
                state.status = 'success';
                state.members = action.payload;
            })
    }
});

export default getAMember.reducer;