import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
    mutation createAccount ($createAccountInput: CreateAccountInput!) {
        createAccount(createAccountInput: $createAccountInput) {
            isSuccess
            message
        }
    }
`;

export const LOGIN = gql`
    mutation login($loginInput: LoginInput){
        login (loginInput: $loginInput) {
            email
            password
            photoUrl
            uid
            userName
        }
    }
`;
