import { formatDate } from "@/helpers";
import { DriveInput, Project, ProjectInput, ProjectTypeResult } from "@/models";
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

export const addDriveToProject = createAsyncThunk('project/addDriveToProject', async (data: DriveInput) => {
    try {
        const { isSuccess, message } = await addDrive(data);
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

export const getProjectsByUser = createAsyncThunk('getProjects/getProjectsByUser', async (uid: string): Promise<ProjectTypeResult[]> => {
    try {
        const projects = await getProjectsByUserId(uid);
        const result = projects.map(data => (
            {
                id_project: data.id_project,
                user_id: data.user_id,
                name_proj: data.name_proj,
                description: data.description,
                assigment: data.assigment,
                professor: data.professor,
                date_release: formatDate(data.date_release),
                code_project: data.code_project,
                drive_link: data.drive_link,
                createAt: formatDate(data.createAt!)
            }
        ));
        return result;
    } catch (error) {
        throw error;
    }
});

export const getAProject = createAsyncThunk('getProject/getAProject', async (id_project: string): Promise<Project> => {
    try {
        const project = await getProject(id_project);
        return project;
    } catch (error) {
        throw error
    }
});