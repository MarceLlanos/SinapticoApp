export enum UserTeamRoles {
    ADMIN = 'ADMIN',
    PO = 'PO',
    SM = 'SCRUM',
    TEAM = 'TEAM'
}

export interface UserTeam {
    uid: string
    id_project: string
    email: string
    userName: string
    photoUrl?: string
    role: string
}

export interface UserTeamInput {
    uid: string
    code_project: string
}

export interface AddUserInput {
    uid: string
    id_project: string
    role: string
}

export interface MemberInput {
    uid: string
    id_project: string
}

export interface UserTeamResult {
    isSuccess: boolean
    message: string
    userTeam: UserTeam
}

export interface JoinUserTeamResult {
    isSuccess: boolean
    message: string
    id_project: string
}