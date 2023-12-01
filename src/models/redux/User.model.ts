export interface UserEmailPass {
    uid: string;
    email: string;
    userName: string;
    password?: string;
}

export interface UserGoogle extends UserEmailPass {
    photoUrl: string;
}

export type UserCombined = UserEmailPass | UserGoogle;

export interface UserInput {
    email: string
    password: string
    userName: string
}

export interface LoginInput {
    email: string
    password: string
}

export interface LoginGoogleInput {
    email: string
}

export interface UserResult {
    isSuccess: boolean
    message: string
    user: UserCombined
}

export interface UserGoogleResult {
    isSuccess: boolean
    message: string
    user: UserGoogle
}

export interface Result {
    isSuccess: boolean
    message: string
}