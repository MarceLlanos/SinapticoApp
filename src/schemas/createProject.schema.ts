import { gql } from '@apollo/client';

export const GET_A_PROJECT = gql`
    query getAProject($idProject: ID!) {
        getAProject(id_project: $idProject) {
            assigment
            code_project
            createAt
            date_release
            description
            drive_link
            id
            name_proj
            professor
            userId
        }
    }
`;

export const GET_PROJECT_CODE = gql`
    query getProjectCode($idProject: ID!) {
        getProjectCode(id_project: $idProject)
    }
`;

export const CREATE_PROJECT = gql`
    mutation createProject($userId: ID!, $projectInput: ProjectInput) {
    createProject(userId: $userId, projectInput: $projectInput) {
        isSuccess
        message
    }
  }
`;

export const GET_PROJECT_DRIVE = gql`
    query getProjectDrive($idProject: ID!) {
        getProjectDrive(id_project: $idProject)
    }
`;

export const GET_PROJECTS_BY_USER_ID = gql`
    query Query($userId: ID!) {
        getProjectsByUserID(userId: $userId) {
            assigment
            code_project
            createAt
            date_release
            description
            drive_link
            id
            name_proj
            professor
            userId
        }
    }
`;

export const UPDATE_PROJECCT = gql`
    mutation updateProject($projectId: ID!, $projectInput: ProjectInput) {
        updateProject(projectId: $projectId, projectInput: $projectInput) {
            assigment
            code_project
            createAt
            date_release
            description
            id
            drive_link
            name_proj
            professor
            userId
        }
    }
`;

export const DELETE_PROJECT = gql`
    mutation DeleteProject($projectId: ID!) {
        deleteProject(projectId: $projectId) {
            isSuccess
            message
        }
    }
`;