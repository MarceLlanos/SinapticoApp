import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/models";
import { getTaskProjectByState, getTasksByUser, getTasksProject } from "../asyncState";

const taskInitialState: Task[] = [];

const getTasksSlice = createSlice({
    name: 'getTasks',
    initialState: {
        taskInitialState: taskInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasksByUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload;
            }),
            builder.addCase(getTaskProjectByState.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload;
            }),
            builder.addCase(getTasksProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload;
            })
    }
});

export default getTasksSlice.reducer;