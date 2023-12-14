import { createSlice } from "@reduxjs/toolkit";
import { getMembersTeam } from "../asyncState/team.async";
import { UserTeam } from "@/models";

const users: UserTeam[] = []

const getTeamMembersSlice = createSlice({
    name: 'getTeamMembers',
    initialState: {
        members: users,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMembersTeam.fulfilled, (state, action) => {
            state.status = 'success';
            state.members = action.payload;
        });
    }
});

export default getTeamMembersSlice.reducer;