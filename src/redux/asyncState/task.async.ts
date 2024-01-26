import { TaskInput, UpdateInputTask } from "@/models";
import { createTask, updateTask } from "@/services/task.service";
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
