import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
    query Query($idProject: ID!, $userId: ID!, $getProjectCodeIdProject2: ID!, $getProjectDriveIdProject2: ID!) {
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
        getProjectCode(id_project: $getProjectCodeIdProject2)
        getProjectDrive(id_project: $getProjectDriveIdProject2)
    }

    mutation createProject($userId: ID!, $projectInput: ProjectInput) {
    createProject(userId: $userId, projectInput: $projectInput) {
        isSuccess
        message
    }


  }
`;