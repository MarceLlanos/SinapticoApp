import { AuthState } from "@/models";
import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const authSelector: (state: RootState) =>
    AuthState | null = (state: RootState) => (state.auth.userDataAuth);

export const authenticatedSelector: (state: RootState) =>
    boolean = (state: RootState) => (state.auth.authenticated);

export const isUserAuthenticated = createSelector(
    authenticatedSelector,
    authenticated => (authenticated)
);

export const uidUserSelector = createSelector(
    authSelector,
    auth => auth?.uid
);

export const emailSelector = createSelector(
    authSelector,
    auth => auth?.email
)

export const nameSelector = createSelector(
    authSelector,
    auth => auth?.name
);

export const photoSelector = createSelector(
    authSelector,
    auth => auth?.photo
)