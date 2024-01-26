import { createSlice } from "@reduxjs/toolkit";
import { Task } from "@/models";
import { getTasksProject } from "../asyncState";

const taskInitialState: Task[] = [];

const getTasksSlice = createSlice({
    name: 'task',
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
    }
});

export default getTasksSlice.reducer;