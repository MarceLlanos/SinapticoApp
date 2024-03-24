import { ProjectTypeResult } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { getAProject } from "../asyncState/project.async";

const projectInitialState: ProjectTypeResult = {
    id_project: '',
    user_id: '',
    name_proj: '',
    description: '',
    assigment: '',
    professor: '',
    code_project: '',
    drive_link: '',
    date_release: ''
}

const getProjectSlice = createSlice({
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

export default getProjectSlice.reducer;