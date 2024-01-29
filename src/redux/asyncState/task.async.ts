import { Task, TaskInput, TaskType, UpdateInputTask } from "@/models";
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

const mapTaskData = (tasks: Task[]): Task[] => {
    return tasks.map(task => ({
        id_project: task.id_project,
        uidAssignedTo: task.uidAssignedTo,
        title: task.title,
        description: task.description,
        timeAssigned: task.timeAssigned,
        levelDifficulty: task.levelDifficulty,
        stateTask: task.stateTask
    }));
};

export const getTasksProject = createAsyncThunk('getTasks/tasks', async (id_project: string): Promise<Task[]> => {
    try {
        const tasks: Task[] = await getTasks(id_project);
        const dataTasks = mapTaskData(tasks);
        return dataTasks;
    } catch (error) {
        throw error;
    }
});


export const getTasksByUser = createAsyncThunk('getTasks/taskByUser', async (id_project: string): Promise<Task[]> => {
    try {
        const tasks: Task[] = await getTasks(id_project);
        const dataTasks = mapTaskData(tasks);
        return dataTasks;
    } catch (error) {
        throw error;
    }
});

