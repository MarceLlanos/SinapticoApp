import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { rootReducer } from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
});

export type AppDispatch = typeof store.dispatch;
