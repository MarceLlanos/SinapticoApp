import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import ThunkMiddleware from 'redux-thunk';
import {
    getAMemberSlice,
    getProjectSlice,
    getTeamMembersSlice,
    projectSlice,
    taskSlice,
    teamSlice,
    userLogoutSlice,
    userSlice
} from "./states";

const rootReducer = combineReducers({
    user: userSlice,
    userLogout: userLogoutSlice,
    project: projectSlice,
    team: teamSlice,
    teamMemebers: getTeamMembersSlice,
    member: getAMemberSlice,
    projectUser: getProjectSlice,
    task: taskSlice
});

export const storeReduxApp = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware),
});


export type AppDispatch = typeof storeReduxApp.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
