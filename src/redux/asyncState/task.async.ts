import { LevelDifficultyInput, LevelDifficultyStateInput, TaskInput, TaskList, TasksByState, UpdateInputTask } from "@/models";
import { createTask, deleteTask, getTasks, getTasksByState, getTotalTasksByLevelDifficulty, getTotalTasksByLevelDifficultyAndState, getTotalTasksByState, getTotalTasksFromProject, updateTask } from "@/services/task.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Result } from "@/models";

export const createATask = createAsyncThunk('task/create', async (dataTask: TaskInput): Promise<Result> => {
    try {
        const { isSuccess, message } = await createTask(dataTask);
        return { isSuccess, message }
    } catch (error) {
        throw error;
    }
});

export const updateATask = createAsyncThunk('task/update', async (updateInputTask: UpdateInputTask) => {
    try {
        const { isSuccess, message } = await updateTask(updateInputTask);
        return { isSuccess, message }
    } catch (error) {
        throw error;
    }
});

export const deleteATask = createAsyncThunk('task/delete', async (id_task: string) => {
    try {
        const { isSuccess, message } = await deleteTask(id_task);
        return { isSuccess, message }
    } catch (error) {
        throw error;
    }
});

export const getTasksProject = createAsyncThunk('getTasksProject/tasksProject', async (id_project: string): Promise<TaskList> => {
    try {
        const tasks: TaskList = await getTasks(id_project);
        return tasks;
    } catch (error) {
        throw error;
    }
});

export const getTasksByUser = createAsyncThunk('getTasks/taskByUser', async (id_project: string): Promise<TaskList> => {
    try {
        const tasks: TaskList = await getTasks(id_project);

        return tasks;
    } catch (error) {
        throw error;
    }
});

export const getTaskProjectByState = createAsyncThunk('getUserTasks/tasksByState', async (tasksState: TasksByState): Promise<TaskList> => {
    try {
        const tasks: TaskList = await getTasksByState(tasksState);
        return tasks;
    } catch (error) {
        throw error;
    }
});

export const getTotalTasksLevelDifficulty = createAsyncThunk('getTotalTasksLevelDifficulty/tasksByLevelDifficulty', async (inputData: LevelDifficultyInput): Promise<number> => {
    try {
        const totalTasks: number = await getTotalTasksByLevelDifficulty(inputData);
        return totalTasks;
    } catch (error) {
        throw error;
    }
});

export const getTotalTaskLevelDifficultyState = createAsyncThunk('getTotalTasksLevelDifficultyState/tasksByLevelDifficultyState', async (inputData: LevelDifficultyStateInput): Promise<number> => {
    try {
        const totalTasks: number = await getTotalTasksByLevelDifficultyAndState(inputData);
        return totalTasks;
    } catch (error) {
        throw error;
    }
});

export const getTotalProjectTasks = createAsyncThunk('getTotalProjectTasks/tasksProject', async (idProject: string): Promise<number> => {
    try {
        const totalTasks: number = await getTotalTasksFromProject(idProject);
        return totalTasks;
    } catch (error) {
        throw error;
    }
});

export const getTotalTaskState = createAsyncThunk('getTotalTaskState/tasksByLevelDifficultyState', async (inputData: TasksByState): Promise<number> => {
    try {
        const totalTasks: number = await getTotalTasksByState(inputData);
        return totalTasks;
    } catch (error) {
        throw error;
    }
});