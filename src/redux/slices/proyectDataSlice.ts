import { DataProject } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const dataProjectInitialState: DataProject = {
    uidProject: '',
    nameProject: '',
    description: '',
    assigment: '',
    proffessorName: '',
    dateDeliverProject: new Date(0)
}


export const projectDataSlice = createSlice({
    name: 'projectDataSlice',
    initialState: dataProjectInitialState,
    reducers: {
        createProject: (state, { payload }: PayloadAction<DataProject>) => {

        },
        editProject: (state, action) => {

        },
        deleteProject: (state) => {

        }
    }
})