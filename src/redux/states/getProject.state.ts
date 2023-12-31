import { Project } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { getAProject } from "../asyncState/project.async";

const projectInitialState: Project = {
    id_project: '',
    user_id: '',
    name_proj: '',
    description: '',
    assigment: '',
    professor: '',
    code_project: '',
    drive_link: '',
    date_release: null
}

const getProject = createSlice({
    name: 'getProject',
    initialState: {
        project: projectInitialState,
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAProject.fulfilled, (state, action) => {
            state.status = 'success';
            state.project = action.payload;
        })
    }
});

export default getProject.reducer;