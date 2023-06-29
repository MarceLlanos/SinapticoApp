import { combineReducers } from '@reduxjs/toolkit';

import { authSlice, projectApi } from '../slices';

export const rootReducer = combineReducers({
	auth: authSlice.reducer,
	[projectApi.reducerPath]: projectApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
