import {
    combineReducers,
    configureStore,
} from "@reduxjs/toolkit";
import ThunkMiddleware from 'redux-thunk';
import {
    getAMemberSlice,
    getTeamMembersSlice,
    projectSlice,
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
});

export const storeReduxApp = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware),
});


export type AppDispatch = typeof storeReduxApp.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
