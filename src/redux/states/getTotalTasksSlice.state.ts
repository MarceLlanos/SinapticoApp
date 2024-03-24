import { createSlice } from "@reduxjs/toolkit";
import { getTotalTaskLevelDifficultyState, getTotalTasksLevelDifficulty } from "../asyncState";

const taskInitialState: number = 0;

const getTotalTasksSlice = createSlice({
    name: 'getTasks',
    initialState: {
        taskInitialState: taskInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTotalTasksLevelDifficulty.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload;
            }),
            builder.addCase(getTotalTaskLevelDifficultyState.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload;
            })
    }
});

export default getTotalTasksSlice.reducer;