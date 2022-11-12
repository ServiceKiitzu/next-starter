import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import helloSlice from './features/hello/helloSlice';

const logger = createLogger();

const store = configureStore({
	reducer: {
		hello: helloSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
