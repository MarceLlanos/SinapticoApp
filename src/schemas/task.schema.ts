import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation Mutation($uid: ID!, $idProject: ID!, $taskInput: TaskInput) {
        createTask(uid: $uid, id_project: $idProject, taskInput: $taskInput) {
            isSuccess
            message
            task {
                dateCreated
                description
                id_project
                levelDifficulty
                stateTask
                timeAssigned
                title
                uidAssignedTo
            }
        }
    }
`;

export const UPDATE_TASK = gql`

`;