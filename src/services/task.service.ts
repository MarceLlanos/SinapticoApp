import { firestore } from "@/firebase";
import { formatDate, titleTask } from "@/helpers";
import {
    TaskInput,
    IsSuccess,
    Task,
    UpdateInputTask,
    TaskByUserInput,
    TasksByState,
    TaskList,
    LevelDifficultyInput,
    LevelDifficultyStateInput
} from "@/models";
import {
    DocumentData,
    QuerySnapshot,
    collection,
    getDocs,
    orderBy,
    query,
    where
} from "firebase/firestore";
import {
    addDocument,
    deleteDocument,
    getDocumentById,
    updateDocument
} from "./collection.service";
import { getUserAssigned } from "@/utilities";

const taskRef = collection(firestore, 'task');

const mapTaskData = (querySnapshot: QuerySnapshot<DocumentData>): TaskList => {
    const tasks: TaskList = querySnapshot.docs.map((doc) => {
        const id_task = doc.id;
        const { id_project, uidAssignedTo, userName, title, description, timeAssigned, levelDifficulty, stateTask, createAt } = doc.data();
        const customDate = formatDate(createAt);
        return {
            id: id_task,
            id_project,
            uidAssignedTo,
            userName,
            title,
            description,
            timeAssigned,
            levelDifficulty,
            stateTask,
            createAt: customDate
        }
    });

    return tasks;
}

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

        const taskTitle: string = await titleTask(id_project!);
        const { userName } = await getUserAssigned(uidAssignedTo!);
        const taskData = {
            id_project,
            uidAssignedTo,
            userName,
            title: taskTitle,
            description,
            timeAssigned,
            levelDifficulty,
            stateTask,
            createAt: new Date(),
        }
        await addDocument('task', taskData);
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

export const updateTask = async ({ id_task, dataTask }: UpdateInputTask): Promise<IsSuccess> => {
    try {
        await updateDocument('task', id_task, dataTask);
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

export const getTasks = async (id_project: string): Promise<TaskList> => {
    try {
        if (!id_project) return [];

        const queryTask = query(taskRef, where('id_project', '==', id_project));
        const querySnapshot = await getDocs(queryTask);

        if (querySnapshot.empty) return [];

        const tasks = mapTaskData(querySnapshot);

        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTask = async (id_task: string): Promise<Task> => {
    try {
        const task = await getDocumentById('task', id_task);

        const taskData: Task = {
            id: id_task,
            id_project: task!.id_project,
            uidAssignedTo: task!.uidAssignedTo,
            userName: task!.userName,
            title: task!.title,
            description: task!.description,
            timeAssigned: task!.timeAssigned,
            levelDifficulty: task!.levelDifficulty,
            stateTask: task!.stateTask,
            createAt: task!.createAt,
        }
        return taskData;
    } catch (error) {
        throw error;
    }
}

export const getTasksByUserId = async ({ uid, id_project }: TaskByUserInput): Promise<TaskList> => {
    try {
        if (!id_project) return [];

        const queryTask = query(taskRef, where('id_project', '==', id_project), where('uidAssignedTo', '==', uid));
        const querySnapshot = await getDocs(queryTask);

        if (querySnapshot.empty) return [];

        const tasks: TaskList = mapTaskData(querySnapshot);

        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTasksByState = async ({ id_project, stateTask }: TasksByState): Promise<TaskList> => {
    try {
        if (!id_project) return [];

        const queryTask = query(taskRef, where('id_project', '==', id_project), where('stateTask', '==', stateTask), orderBy("createAt", "desc"));
        const querySnapshot = await getDocs(queryTask);

        if (querySnapshot.empty) return [];

        const tasks: TaskList = mapTaskData(querySnapshot);

        return tasks;
    } catch (error) {
        throw error;
    }
}

export const getTotalTasksFromProject = async (id_project: string): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());
        return taskDocument.length;
    } catch (error) {
        throw error;
    }
}

export const getTotalTasksByState = async ({ id_project, stateTask }: TasksByState): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('stateTask', '==', stateTask), orderBy("createAt", "desc"));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;
    } catch (error) {
        throw error;
    }
}

export const getTotalTasksByStateAndUser = async (id_project: string, uid: string, stateTask: string): Promise<number> => {
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

export const getTotalTasksByLevelDifficulty = async ({ id_project, levelDifficulty }: LevelDifficultyInput): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('levelDifficulty', '==', levelDifficulty));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;

    } catch (error) {
        throw error;
    }
}

export const getTotalTasksByLevelDifficultyAndState = async ({ id_project, levelDifficulty, stateTask }: LevelDifficultyStateInput): Promise<number> => {
    try {
        const queryTask = query(taskRef, where('id_project', '==', id_project), where('levelDifficulty', '==', levelDifficulty), where('stateTask', '==', stateTask));
        const querySnapshot = await getDocs(queryTask);
        const taskDocument = querySnapshot.docs.map((doc) => doc.data());

        return taskDocument.length;

    } catch (error) {
        throw error;
    }
}

