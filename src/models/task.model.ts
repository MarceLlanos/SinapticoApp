export const difficultyTask = {
    ALTA: 'alta',
    MEDIA: 'media',
    BAJA: 'baja',
    IMPOSIBLE: 'imposible'
}

export interface Task {
    id_project: string
    uidAssignedTo: string
    title: string
    description: string
    timeAssigned: number
    levelDifficulty: string
    stateTask: string
    dateCreated: Date
}

export interface TaskInput {
    id_project: string
    uidAssignedTo: string
    description: string
    timeAssigned: number
    levelDifficulty: string
    stateTask: string
}

export interface TaskUpdate {
    description: string
    timeAssigned: number
    levelDifficulty: string
    uidAssignedTo: string
}

export interface IsSuccess {
    isSuccess: Boolean
    message: String
}

export interface IsSuccessTask {
    isSuccess: Boolean
    message: String
    task: Task
}