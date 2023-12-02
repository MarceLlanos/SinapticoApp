import { ProjectInput } from "@/models";
import { Result } from "@/models/redux";
import {
    addDrive,
    createNewProject,
    updateProjectData,
    getProjectsByUserId,
    deleteProjectData,
    getProject
} from "@/services/projectDocument.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProject = createAsyncThunk('project/createProject', async (projectInput: ProjectInput) => {
    try {
        const { isSuccess, message, id_project } = await createNewProject(projectInput);

        return {
            isSuccess,
            message,
            id_project
        }
    } catch (error) {
        throw error;
    }
});

export const addDriveToProject = createAsyncThunk<Result, { id_project: string, drive_link: string }>('project/addDriveToProject', async ({ id_project, drive_link }) => {
    try {
        const { isSuccess, message } = await addDrive(id_project, drive_link);
        return {
            isSuccess,
            message
        }
    } catch (error) {
        throw error;
    }
});

export const updateProject = createAsyncThunk<Result, { id_project: string, projectInput: ProjectInput }>('project/updateProject', async ({ id_project, projectInput }) => {
    try {
        const { isSuccess, message } = await updateProjectData(id_project, projectInput);
        return {
            isSuccess,
            message
        }
    } catch (error) {
        throw error;
    }
});

export const deleteProject = createAsyncThunk('project/deleteProject', async (id_project: string) => {
    try {
        const { isSuccess, message } = await deleteProjectData(id_project);
        return {
            isSuccess,
            message
        }
    } catch (error) {
        throw error;
    }
})

export const getProjectsByUser = createAsyncThunk('getProject/getProjectsByUser', async (uid: string) => {
    try {
        const projects = await getProjectsByUserId(uid);
        return projects;
    } catch (error) {
        throw error;
    }
});

export const getAProject = createAsyncThunk('getProject/getAProject', async (id_project: string) => {
    try {
        const project = await getProject(id_project);
        return project
    } catch (error) {
        throw error
    }
})