import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
    mutation CreateAccount($createAccountInput: CreateAccountInput) {
        createAccount(createAccountInput: $createAccountInput) {
            isSuccess
            message
            user {
                email
                uid
                userName
            }
        }
    }
`;

export const CREATE_ACCOUNT_WITH_GOOGLE = gql`
    mutation CreateAccountWithGoogle($user: UserLoginGoogle) {
        createAccountWithGoogle(user: $user) {
            isSuccess
            message
            user {
                email
                photoUrl
                uid
                userName
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($loginInput: LoginInput) {
        login(loginInput: $loginInput) {
            isSuccess
            message
            user {
                email
                uid
                userName
            }
        }
    }
`;

export const LOGIN_WITH_GOOGLE = gql`
    mutation loginWithGoogle($email: String) {
        loginWithGoogle(email: $email) {
            isSuccess
            message
            user {
                email
                photoUrl
                uid
                userName
            }
        }
    }

`;

export const LOGOUT = gql`
    mutation logout($uid: String) {
        logout(uid: $uid)
    }
`;

export const GET_USER_BY_ID = gql`
    query GetUserByID($uid: String) {
        getUserByID(uid: $uid) {
            email
            uid
            userName
        }
    }
`;

export const IS_LOGGED_IN = gql`
    query IsUserLoggedIn ($uid: String){
        IsUserLoggedIn(uid: $uid)
    }
`;
