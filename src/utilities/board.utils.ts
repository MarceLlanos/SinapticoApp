import { TaskState, BoardSectionType, Task } from "@/models";

export const initializedBoard = (tasks: Task[]) => {
    const boardSection: BoardSectionType = {};

    Object.keys(TaskState).forEach((boardSectionKey) => {
        boardSection[boardSectionKey] = tasks;
    })

    return boardSection;
}

export const findBoardSectionContainer = (boardSection: BoardSectionType, id: string) => {
    if (id in boardSection) {
        return id;
    }
    const container = Object.keys(boardSection).find((key) => boardSection[key].find(item => item.id = id))

    return container;
}