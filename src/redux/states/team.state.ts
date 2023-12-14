import { createSlice } from "@reduxjs/toolkit";
import { deleteMemberTeam, joinTeam, updateMememberTeam } from "../asyncState/team.async";
import { Result } from "@/models";

const MemberInitialState: Result = {
    isSuccess: false,
    message: ''
}
const teamSlice = createSlice({
    name: 'team',
    initialState: {
        member: MemberInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(joinTeam.fulfilled, (state, action) => {
                state.status = 'success';
                state.member = action.payload
            })
            .addCase(updateMememberTeam.fulfilled, (state, action) => {
                state.status = 'success';
                state.member = action.payload
            })
            .addCase(deleteMemberTeam.fulfilled, (state, action) => {
                state.status = 'success';
                state.member = action.payload
            })
    },
});

export default teamSlice.reducer;