import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/models";
import { getTasksByUser, getTasksProject } from "../asyncState";

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
            .addCase(getTasksProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload
            })
            .addCase(getTasksByUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload
            })
    }
});

export default getTasksSlice.reducer;