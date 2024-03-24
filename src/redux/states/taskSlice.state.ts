import { createSlice } from "@reduxjs/toolkit";
import { IsSuccess } from "@/models";
import { createATask, updateATask } from "../asyncState";

const InitialState: IsSuccess = {
    isSuccess: false,
    message: '',
}

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        taskInitialState: InitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createATask.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload
            })
            .addCase(updateATask.fulfilled, (state, action) => {
                state.status = 'success';
                state.taskInitialState = action.payload
            })
    }
});

export default taskSlice.reducer;