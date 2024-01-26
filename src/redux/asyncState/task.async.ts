import { Task, TaskInput, UpdateInputTask } from "@/models";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "@/services/task.service";
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

export const getTasksProject = createAsyncThunk('getTask', async (id_project: string): Promise<Task[]> => {
    try {
        const tasks: Task[] = await getTasks(id_project);
        return tasks;
    } catch (error) {
        throw error;
    }
});

export const getTaskByUser = createAsyncThunk('getTask/taskByUser', async (id_project: string): Promise<Task[]> => {
    try {
        const tasks: Task[] = await getTasks(id_project);
        return tasks;
    } catch (error) {
        throw error;
    }
});
