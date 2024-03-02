export const difficultyTask = {
    ALTA: 'alta',
    MEDIA: 'media',
    BAJA: 'baja',
    IMPOSIBLE: 'imposible'
}

type StateTask = 'Pendientes' | 'Bloqueadas' | 'En curso' | 'Terminadas';

export const TaskState = {
    PENDIENTE: 'Pendientes',
    BLOQUEADAS: 'Bloqueadas',
    ENCURSO: 'En curso',
    TERMINADAS: 'Terminadas',
}

export const taskStates = [
    'Pendientes',
    'Bloqueadas',
    'En curso',
    'Terminadas',
]

export interface Task {
    id: string;
    id_project: string;
    uidAssignedTo: string;
    userName: string;
    title: string;
    description: string;
    timeAssigned: number;
    levelDifficulty: string;
    stateTask: StateTask;
    createAt?: Date;
}

export type TaskList = Task[];

export interface BoardSectionType {
    [name: string]: Task[]
}

export interface TaskInput {
    id_project?: string
    uidAssignedTo?: string
    description?: string
    timeAssigned?: number
    levelDifficulty?: string
    stateTask?: string
    createAt?: Date
}

export type TaskType = {
    id_project: string;
    uidAssignedTo: string;
    title: string;
    description: string;
    timeAssigned: number;
    levelDifficulty: string;
    stateTask: string;
    createAt: string;
}

export type UpdateInputTask = {
    id_task: string;
    dataTask: TaskInput;
}

export type TaskByUserInput = {
    uid: string;
    id_project: string;
}

export type TasksByState = {
    id_project: string;
    stateTask: string;
}

export interface TaskUpdate {
    description: string
    timeAssigned: number
    levelDifficulty: string
    uidAssignedTo: string
}

export interface IsSuccess {
    isSuccess: boolean
    message: string
}

export interface IsSuccessTask {
    isSuccess: boolean
    message: string
    task: Task
}

export const TaskLevel = {
    red: 'Alta',
    yellow: 'Media',
    green: 'Baja',
    black: 'Imposible'
} as any