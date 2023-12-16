import { firestore } from "@/firebase";
import { titleTask } from "@/helpers";
import {
    TaskInput,
    IsSuccess,
    Task
} from "@/models";
import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";
import {
    addDocument,
    deleteDocument,
    getDocumentById,
    updateDocument
} from "./collection.service";

const taskRef = collection(firestore, 'task');

export const createTask = async (dataTask: TaskInput): Promise<IsSuccess> => {
    try {
        const {
            id_project,
            uidAssignedTo,
            description,
            timeAssigned,
            levelDifficulty,
            stateTask
        } = dataTask;

        const taskTitle: string = await titleTask(id_project);
        const taskData = {
            id_project,
            uidAssignedTo,
            title: taskTitle,
            description,
            timeAssigned,
            levelDifficulty,
            stateTask,
            dateCreated: new Date(),
        }
        await addDocument('team', taskData);
        return {
            isSuccess: true,
            message: 'Tarea creada satisfactoriamente!',
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo crear la tarea debido a ${error}`
        };
    }
};

export const updateTask = async (id_task: string, taskInput: TaskInput): Promise<IsSuccess> => {
    try {
        await updateDocument('team', id_task, taskInput);
        return {
            isSuccess: true,
            message: 'Se actualizó satisfactoriamente los datos del proyecto!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo actualizar correctamente los datos proyecto debido a ${error}`
        };
    }
}

export const deleteTask = async (id_task: string): Promise<IsSuccess> => {
    try {
        await deleteDocument('project', id_task);
        return {
            isSuccess: true,
            message: 'Se eliminó satisfactoriamente el proyecto!'
        }
    } catch (error) {
        return {
            isSuccess: false,
            message: `No se pudo eliminar correctamente el proyecto debido a ${error}`
        };
    }
}

export const getTasks = async (id_project: string): Promise<Task[]> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project));
        const querySnapshot = await getDocs(queryTask);

        const taskDocument = querySnapshot.docs.map((doc) => doc.data());
        const tasks: Task[] = taskDocument.map(task => ({
            id_task: task.id,
            id_project: task.id_project,
            uidAssignedTo: task.uidAssignedTo,
            title: task.title,
            description: task.description,
            timeAssigned: task.timeAssigned,
            levelDifficulty: task.levelDifficulty,
            stateTask: task.stateTask,
            dateCreated: task.dateCreated,
        }));
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTask = async (id_task: string): Promise<Task> => {
    try {
        const task = await getDocumentById('task', id_task);

        const taskData: Task = {
            id_project: task!.id_project,
            uidAssignedTo: task!.uidAssignedTo,
            title: task!.title,
            description: task!.description,
            timeAssigned: task!.timeAssigned,
            levelDifficulty: task!.levelDifficulty,
            stateTask: task!.stateTask,
            dateCreated: task!.dateCreated,
        }

        return taskData;
    } catch (error) {
        throw error;
    }
}

export const getTaskByUserId = async (uid: string, id_project: string): Promise<Task[]> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('uidAssignedTo', '==', uid));
        const querySnapshot = await getDocs(queryTask);

        const taskDocument = querySnapshot.docs.map((doc) => doc.data());
        const tasks: Task[] = taskDocument.map(task => ({
            id_project: task.id_project,
            uidAssignedTo: task.uidAssignedTo,
            title: task.title,
            description: task.description,
            timeAssigned: task.timeAssigned,
            levelDifficulty: task.levelDifficulty,
            stateTask: task.stateTask,
            dateCreated: task.dateCreated,
        }));
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTasksByState = async (id_project: string, stateTask: string): Promise<Task[]> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('stateTask', '==', stateTask));
        const querySnapshot = await getDocs(queryTask);

        const taskDocument = querySnapshot.docs.map((doc) => doc.data());
        const tasks: Task[] = taskDocument.map(task => ({
            id_project: task.id_project,
            uidAssignedTo: task.uidAssignedTo,
            title: task.title,
            description: task.description,
            timeAssigned: task.timeAssigned,
            levelDifficulty: task.levelDifficulty,
            stateTask: task.stateTask,
            dateCreated: task.dateCreated,
        }));
        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getNumOfTasksCreated = async (id_project: string): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;
    } catch (error) {
        throw error;
    }
}

export const getNumTasksByState = async (id_project: string, stateTask: string): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('stateTask', '==', stateTask));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;
    } catch (error) {
        throw error;
    }
}

export const getNumTasksByStateAndUser = async (id_project: string, uid: string, stateTask: string): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project),
            where('stateTask', '==', stateTask),
            where('uidAssignedTo', '==', uid)
        );
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;
    } catch (error) {
        throw error;
    }
}

