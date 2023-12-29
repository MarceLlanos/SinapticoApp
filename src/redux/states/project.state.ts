import { createSlice } from "@reduxjs/toolkit";
import {
    addDriveToProject,
    createProject,
    deleteProject,
    updateProject
} from "../asyncState/project.async";
import { ProjectResult } from "@/models";

const ProjectInitialState: ProjectResult = {
    isSuccess: false,
    message: '',
    id_project: ''
}

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        project: ProjectInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.project = action.payload
            })
            .addCase(addDriveToProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.project = action.payload
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.project = action.payload
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
                state.status = 'success';
                state.project = action.payload
            })
    }
});

export default projectSlice.reducer;