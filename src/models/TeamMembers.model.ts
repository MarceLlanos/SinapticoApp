export enum UserTeamRoles {
    ADMIN = 'ADMIN',
    PO = 'PO',
    SM = 'SCRUM',
    TEAM = 'TEAM'
}

export interface UserTeam {
    user_id: string
    id_project: string
    email: string
    userName: string
    photoUrl?: string
    role: string
    timeJoin: Date | null
}

export interface UserTeamInput {
    user_id: string
    code_project: string
}

export interface AddUserInput {
    user_id: string
    id_project: string
    role: string
}

export interface MemberInput {
    user_id: string
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