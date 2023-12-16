import { TaskInput } from "@/models";
import { createTask } from "@/services/task.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createATask = createAsyncThunk('task/createTask', async (dataTask: TaskInput) => {
    const { isSuccess, message } = await createTask(dataTask);

    return { isSuccess, message }
});